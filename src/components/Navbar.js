class Navbar {
  constructor() {
    this.isOpen = false;
    this.scrolled = false;
    this.currentPath = (window.location.hash.slice(1)) || '/';
    // Pages with light backgrounds that need dark nav text
    this.lightBgPages = ['/about', '/services', '/contact', '/waitlist'];
    this.init();
  }

  init() {
    this._scrollBound = () => this.handleScroll();
    window.addEventListener('scroll', this._scrollBound);
    this.render();
    this.setupEventListeners();
    
    // Immediately update navbar style for current page
    setTimeout(() => {
      this.updateNavbarStyle();
    }, 100);
  }

  render() {
    const navbar = document.getElementById('navbar');
    if (!navbar) {
      console.error('Navbar element not found');
      return;
    }
    
    // Clear existing content to prevent duplication
    navbar.innerHTML = '';
    
    navbar.innerHTML = `
      <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md card-shadow">
        <nav class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="flex items-center space-x-2" data-route>
              <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">RR</span>
              </div>
              <span class="logo-text font-bold text-xl transition-colors duration-300 text-gray-900">Rapid Rescue</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              ${this.renderNavLinks()}
            </div>

            <!-- CTA Button -->
            <a href="/waitlist" class="nav-cta hidden md:inline-block px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 bg-red-600 text-white hover:bg-red-700" data-route>
              Join Waitlist
            </a>

            <!-- Mobile Menu Button -->
            <button 
              id="mobile-menu-button" 
              class="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div class="w-6 h-6 flex flex-col justify-center items-center">
                <span class="hamburger-line block w-6 h-0.5 bg-gray-900"></span>
                <span class="hamburger-line block w-6 h-0.5 my-1 bg-gray-900"></span>
                <span class="hamburger-line block w-6 h-0.5 bg-gray-900"></span>
              </div>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" class="md:hidden mt-4 pb-4 space-y-1 rounded-xl mobile-menu-spacing ${this.isOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-md shadow-xl border border-gray-200">
            ${this.renderMobileNavLinks()}
          </div>
        </nav>
      </header>
    `;
  }

  renderNavLinks() {
    const links = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' }
    ];

    return links.map(link => {
      const isActive = this.currentPath === link.to;
      const colorClass = isActive ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600';
      return `
        <a 
          href="${link.to}" 
          class="nav-link text-sm font-medium transition-colors ${colorClass}"
          data-route
        >
          ${link.label}
        </a>
      `;
    }).join('');
  }

  renderMobileNavLinks() {
    const links = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' }
    ];

    return links.map(link => {
      const isActive = this.currentPath === link.to;
      const colorClass = isActive ? 'bg-red-600 text-white font-semibold' : 'text-gray-800 hover:text-gray-900';
      return `
        <a 
          href="${link.to}" 
          class="block px-6 py-4 mx-2 rounded-lg transition-all duration-200 ${colorClass} font-medium text-base"
          data-route
        >
          ${link.label}
        </a>
      `;
    }).join('') + `
      <!-- Mobile Waitlist CTA -->
      <div class="pt-4 mt-4 border-t border-gray-200">
        <a 
          href="/waitlist" 
          class="block mx-4 px-6 py-4 bg-red-600 text-white rounded-xl font-bold text-center transition-all duration-200 hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          data-route
        >
          Join Waitlist
        </a>
      </div>
    `;
  }

  setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !e.target.closest('nav')) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    this.updateMobileMenu();
  }

  closeMobileMenu() {
    this.isOpen = false;
    this.updateMobileMenu();
  }

  updateMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu) {
      if (this.isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
      }
    }
  }

  handleScroll() {
    const wasScrolled = this.scrolled;
    this.scrolled = window.scrollY > 20;

    if (wasScrolled !== this.scrolled) {
      this.updateNavbarStyle();
    }
  }

  updateNavbarStyle() {
    const header = document.querySelector('header');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!header) return;

    // Keep consistent white background
    header.classList.remove('bg-transparent', 'bg-white/10');
    header.classList.add('bg-white/95', 'backdrop-blur-md', 'card-shadow');

    // Update logo text color - always dark
    const logoText = header.querySelector('.logo-text');
    if (logoText) {
      logoText.classList.remove('text-white');
      logoText.classList.add('text-gray-900');
    }

    // Update desktop nav link colors
    document.querySelectorAll('.nav-link').forEach(link => {
      const isActive = link.getAttribute('href') === this.currentPath;
      link.classList.remove('text-red-600', 'text-gray-700', 'text-white', 'text-white/80');
      link.classList.add(isActive ? 'text-red-600' : 'text-gray-700');
    });

    // Update hamburger line colors - always dark
    header.querySelectorAll('.hamburger-line').forEach(line => {
      line.classList.remove('bg-white');
      line.classList.add('bg-gray-900');
    });

    // Update CTA button - always red
    const ctaBtn = header.querySelector('.nav-cta');
    if (ctaBtn) {
      ctaBtn.classList.remove('bg-white', 'text-red-600', 'hover:bg-gray-100');
      ctaBtn.classList.add('bg-red-600', 'text-white', 'hover:bg-red-700');
    }

    // Update mobile menu links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      const isActive = link.getAttribute('href') === this.currentPath;
      link.classList.remove('bg-gray-100', 'text-red-600', 'text-gray-700', 'bg-white/20', 'text-white', 'text-white/80', 'bg-red-50', 'text-gray-800', 'text-gray-900', 'text-gray-100', 'bg-gray-800', 'border-l-4', 'border-red-600', 'border-red-400', 'font-semibold', 'text-black');
      if (isActive) {
        link.classList.add('bg-red-600', 'text-white', 'font-semibold');
      } else {
        link.classList.add('text-gray-800');
      }
    });
  }

  updateActivePath(path) {
    this.currentPath = path;
    // Update navbar styling immediately when path changes
    setTimeout(() => {
      this.updateNavbarStyle();
    }, 50);
  }

  updateActiveLink(path) {
    this.updateActivePath(path);
    // Close mobile menu on navigation
    this.closeMobileMenu();
  }
}

// Export for use in main app
window.Navbar = Navbar;
