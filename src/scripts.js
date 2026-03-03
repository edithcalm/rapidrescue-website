// Main application entry point

class RapidRescueApp {
  constructor() {
    this.currentPage = null;
    this.routes = {
      '': 'Index',
      '/': 'Index',
      '/about': 'About',
      '/services': 'Services',
      '/contact': 'Contact',
      '/waitlist': 'Waitlist',
      '*': 'NotFound'
    };
    this.init();
  }

  init() {
    this.setupRouter();
    this.setupComponents();
    this.handleRoute();
  }

  setupRouter() {
    // Hash-based routing for static file servers (e.g. VS Code Live Server)
    window.addEventListener('hashchange', () => {
      this.handleRoute();
    });

    // Handle link clicks with data-route attribute
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-route]');
      if (link) {
        e.preventDefault();
        const path = link.getAttribute('href');
        window.location.hash = '#' + path;
      }
    });
  }

  setupComponents() {
    try {
      this.navbar = new window.Navbar();
    } catch (error) {
      console.error('Navbar error:', error);
    }

    try {
      this.footer = new window.Footer();
    } catch (error) {
      console.error('Footer error:', error);
    }
  }

  navigateTo(path) {
    window.location.hash = '#' + path;
  }

  handleRoute() {
    // Extract path from hash: "#/about" -> "/about", "" -> "/"
    const hash = window.location.hash.slice(1) || '/';
    const currentPath = hash === '' ? '/' : hash;

    const routeKey = Object.keys(this.routes).find(route => {
      if (route === '*') return false;
      return route === currentPath;
    }) || '*';

    const pageName = this.routes[routeKey];
    this.loadPage(pageName, currentPath);

    // Update navbar active state
    if (this.navbar) {
      this.navbar.updateActivePath(currentPath);
      this.navbar.render();
      this.navbar.setupEventListeners();
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }

  async loadPage(pageName, path) {
    try {
      const pageClass = window[pageName];
      if (pageClass) {
        this.currentPage = new pageClass(path);
        await this.currentPage.render();
      } else {
        console.error('Page class not found:', pageName);
      }
    } catch (error) {
      console.error('Error loading page:', error);
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    window.app = new RapidRescueApp();
    
    // Initialize Google Apps Script integration
    initializeGoogleAppsIntegration();
  } catch (error) {
    console.error('App startup error:', error);
  }
});

// Google Apps Script integration
async function initializeGoogleAppsIntegration() {
  // Function to get current waitlist count from spreadsheet using JSONP approach
  window.getWaitlistCount = function() {
    return new Promise((resolve) => {
      // Create unique callback name
      const callbackName = 'callback_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      
      // Create global callback function
      window[callbackName] = function(data) {
        // Clean up
        delete window[callbackName];
        document.head.removeChild(script);
        
        if (data.status === 'success') {
          resolve(data.count);
        } else {
          resolve(null);
        }
      };
      
      // Create script element for JSONP
      const script = document.createElement('script');
      script.src = `https://script.google.com/macros/s/AKfycby9NnUgDmKaqIxLk3fEoJS3VyW9ysq10gSBzSxUiabj4BjyOG4T8pIp2J9bZAPn9n92IQ/exec?action=getCount&callback=${callbackName}`;
      script.onerror = function() {
        delete window[callbackName];
        document.head.removeChild(script);
        resolve(null);
      };
      
      // Set timeout
      setTimeout(() => {
        if (window[callbackName]) {
          delete window[callbackName];
          document.head.removeChild(script);
          resolve(null);
        }
      }, 5000);
      
      document.head.appendChild(script);
    });
  };
  
  // Function to update all waitlist counters with real-time data
  window.updateAllWaitlistCounters = async function(animate = false) {
    try {
      // Get real count from spreadsheet
      const realCount = await window.getWaitlistCount();
      
      if (realCount !== null && realCount >= 0) {
        // Update all counter displays with real count
        const counters = document.querySelectorAll('.waitlist-count, .counter');
        counters.forEach(counter => {
          const currentText = counter.textContent;
          const currentCount = parseInt(currentText) || 0;
          
          // Update the count
          counter.textContent = realCount;
          counter.setAttribute('data-count', realCount);
          
          // Add animation if requested and count changed
          if (animate && realCount !== currentCount) {
            counter.classList.add('counting');
            setTimeout(() => counter.classList.remove('counting'), 1000);
          }
        });
        
        // Update persistent storage as backup
        localStorage.setItem('waitlistCount', realCount.toString());
        
        console.log(`Updated waitlist count to: ${realCount}`);
        return realCount;
      } else {
        // Fallback to stored count or default
        const fallbackCount = localStorage.getItem('waitlistCount') || '505';
        const counters = document.querySelectorAll('.waitlist-count, .counter');
        counters.forEach(counter => {
          counter.textContent = fallbackCount;
          counter.setAttribute('data-count', fallbackCount);
        });
        console.log('Using fallback count:', fallbackCount);
        return parseInt(fallbackCount);
      }
    } catch (error) {
      console.error('Error updating waitlist counters:', error);
      return null;
    }
  };
  
  // Initialize counters immediately when page loads
  window.initializeWaitlistCounters = async function() {
    // First, update with real-time data
    await window.updateAllWaitlistCounters(false);
    
    // Set up periodic updates (every 30 seconds) - only when online
    const updateInterval = setInterval(async () => {
      if (navigator.onLine) {
        await window.updateAllWaitlistCounters(false);
      }
    }, 30000);
    
    // Handle network status changes
    window.addEventListener('online', async () => {
      console.log('Network restored - updating waitlist count');
      await window.updateAllWaitlistCounters(true);
    });
    
    window.addEventListener('offline', () => {
      console.log('Network offline - using cached count');
    });
    
    // Also update when page becomes visible again (user returns to tab)
    document.addEventListener('visibilitychange', async () => {
      if (!document.hidden && navigator.onLine) {
        await window.updateAllWaitlistCounters(false);
      }
    });
    
    // Update when user clicks on waitlist-related elements
    document.addEventListener('click', async (e) => {
      if (e.target.closest('.waitlist-count, .counter, [href*="waitlist"]')) {
        if (navigator.onLine) {
          await window.updateAllWaitlistCounters(true);
        }
      }
    });
    
    // Store interval ID for cleanup if needed
    window.waitlistUpdateInterval = updateInterval;
  };
  
  // Update existing waitlist counter to use real data if available
  if (window.waitlistCounter) {
    const originalRefreshAllDisplays = window.waitlistCounter.refreshAllDisplays;
    window.waitlistCounter.refreshAllDisplays = async function(animate = false) {
      // Use the new real-time update function
      await window.updateAllWaitlistCounters(animate);
      
      // Call original function if it exists
      if (originalRefreshAllDisplays) {
        originalRefreshAllDisplays.call(this, animate);
      }
    };
    
    // Override increment to also refresh from server
    const originalIncrement = window.waitlistCounter.increment;
    window.waitlistCounter.increment = async function() {
      // Call original increment
      if (originalIncrement) {
        await originalIncrement.call(this);
      }
      
      // Then refresh from server to get latest count
      setTimeout(async () => {
        await window.updateAllWaitlistCounters(true);
      }, 1000);
    };
  }
  
  // Initialize counters immediately
  await window.initializeWaitlistCounters();
}
