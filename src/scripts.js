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
  
  // Update existing waitlist counter to use real data if available
  if (window.waitlistCounter) {
    const originalRefreshAllDisplays = window.waitlistCounter.refreshAllDisplays;
    window.waitlistCounter.refreshAllDisplays = async function(animate = false) {
      // Try to get real count first
      const realCount = await window.getWaitlistCount();
      
      if (realCount !== null) {
        // Update all counter displays with real count
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'));
          counter.setAttribute('data-count', realCount);
          counter.textContent = realCount;
        });
        
        // Update persistent storage
        localStorage.setItem('waitlistCount', realCount.toString());
        
        if (animate) {
          // Trigger animation
          counters.forEach(counter => {
            counter.classList.add('counting');
            setTimeout(() => counter.classList.remove('counting'), 1000);
          });
        }
        
        return;
      }
      
      // Fall back to original method if real count is not available
      return originalRefreshAllDisplays.call(this, animate);
    };
  }
}
