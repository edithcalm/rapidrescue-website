// Main application entry point
class RapidRescueApp {
  constructor() {
    this.currentPage = null;
    this.routes = {
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
    this.handleInitialRoute();
    this.setupEventListeners();
  }

  setupRouter() {
    // Handle browser navigation
    window.addEventListener('popstate', (e) => {
      this.handleRoute();
    });

    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('data-route')) {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        this.navigateTo(path);
      }
    });
  }

  setupComponents() {
    // Initialize components
    this.navbar = new Navbar();
    this.footer = new Footer();
  }

  handleInitialRoute() {
    const path = window.location.pathname;
    this.handleRoute(path);
  }

  navigateTo(path) {
    window.history.pushState({}, '', path);
    this.handleRoute(path);
  }

  handleRoute(path = null) {
    const currentPath = path || window.location.pathname;
    const routeKey = Object.keys(this.routes).find(route => {
      if (route === '*') return false;
      if (route.includes(':')) {
        const routeRegex = new RegExp(route.replace(/:[^/]+/g, '[^/]+'));
        return routeRegex.test(currentPath);
      }
      return route === currentPath;
    }) || '*';

    const pageName = this.routes[routeKey];
    this.loadPage(pageName, currentPath);
  }

  async loadPage(pageName, path) {
    try {
      // Hide current page
      const mainContent = document.getElementById('main-content');
      mainContent.style.opacity = '0';
      
      // Load new page
      const pageClass = window[pageName];
      if (pageClass) {
        this.currentPage = new pageClass(path);
        await this.currentPage.render();
        mainContent.style.opacity = '1';
      } else {
        console.error(`Page ${pageName} not found`);
        this.loadPage('NotFound', path);
      }
    } catch (error) {
      console.error('Error loading page:', error);
      this.loadPage('NotFound', path);
    }
  }

  setupEventListeners() {
    // Global event listeners
    document.addEventListener('DOMContentLoaded', () => {
      this.setupScrollAnimations();
    });
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }

  // Utility methods
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  formatCurrency(amount, currency = 'KES') {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
}

// Base Page class
class Page {
  constructor(path) {
    this.path = path;
  }

  async render() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = await this.getHTML();
    this.setupEventListeners();
    this.setupAnimations();
  }

  async getHTML() {
    return '<div class="container mx-auto px-4 py-8"><h1>Page not implemented</h1></div>';
  }

  setupEventListeners() {
    // Override in subclasses
  }

  setupAnimations() {
    // Setup scroll animations for this page
    const elements = document.querySelectorAll('.scroll-animate');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));
  }

  // Helper methods for creating HTML
  createButton(text, className = 'btn-primary', onClick = null) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    if (onClick) button.onclick = onClick;
    return button;
  }

  createInput(type, placeholder, className = 'form-input') {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.className = className;
    return input;
  }

  createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.textContent = text;
    label.className = 'form-label';
    if (htmlFor) label.htmlFor = htmlFor;
    return label;
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new RapidRescueApp();
});
