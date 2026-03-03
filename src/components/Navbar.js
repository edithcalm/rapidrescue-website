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
      <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        this.scrolled ? 'bg-white/95 backdrop-blur-md card-shadow' : 'bg-transparent'
      }">
        <nav class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="flex items-center space-x-2" data-route>
              <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">RR</span>
              </div>
              <span class="logo-text font-bold text-xl transition-colors duration-300 ${this.scrolled ? 'text-gray-900' : 'text-white'}">Rapid Rescue</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              ${this.renderNavLinks()}
            </div>

            <!-- CTA Button -->
            <a href="/waitlist" class="nav-cta hidden md:inline-block px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${this.scrolled ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-red-600 hover:bg-gray-100'}" data-route>
              Join Waitlist
            </a>

            <!-- Mobile Menu Button -->
            <button 
              id="mobile-menu-button" 
              class="md:hidden p-2 rounded-lg transition-colors ${this.scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}"
              aria-label="Toggle menu"
            >
              <div class="w-6 h-6 flex flex-col justify-center items-center">
                <span class="hamburger-line block w-6 h-0.5 transition-all duration-300 ${this.scrolled ? 'bg-gray-900' : 'bg-white'} ${this.isOpen ? 'rotate-45 translate-y-1.5' : ''}"></span>
                <span class="hamburger-line block w-6 h-0.5 transition-all duration-300 my-1 ${this.scrolled ? 'bg-gray-900' : 'bg-white'} ${this.isOpen ? 'opacity-0' : ''}"></span>
                <span class="hamburger-line block w-6 h-0.5 transition-all duration-300 ${this.scrolled ? 'bg-gray-900' : 'bg-white'} ${this.isOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
              </div>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" class="md:hidden mt-4 pb-4 space-y-1 rounded-xl ${this.isOpen ? 'block' : 'hidden'} ${this.scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border border-gray-200' : 'bg-white/95 backdrop-blur-md shadow-xl border border-white/20'}">
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
      let colorClass;
      if (this.scrolled) {
        colorClass = this.currentPath === link.to ? 'text-red-600' : 'text-gray-700 hover:text-red-600';
      } else {
        colorClass = this.currentPath === link.to ? 'text-white font-bold' : 'text-white/80 hover:text-white';
      }
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
      let colorClass;
      if (this.scrolled) {
        colorClass = this.currentPath === link.to ? 'bg-gray-100 text-red-600' : 'text-gray-700 hover:bg-gray-100';
      } else {
        colorClass = this.currentPath === link.to ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white';
      }
      return `
        <a 
          href="${link.to}" 
          class="block px-4 py-3 rounded-lg transition-all duration-200 ${colorClass} font-medium"
          data-route
        >
          ${link.label}
        </a>
      `;
    }).join('') + `
      <!-- Mobile Waitlist CTA -->
      <div class="pt-3 mt-3 border-t ${this.scrolled ? 'border-gray-200' : 'border-white/20'}">
        <a 
          href="/waitlist" 
          class="block mx-4 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold text-center transition-all duration-200 hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu) {
      if (this.isOpen) {
        // Add animation classes
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block', 'animate-slide-down');
        // Remove animation class after animation completes
        setTimeout(() => {
          mobileMenu.classList.remove('animate-slide-down');
        }, 300);
      } else {
        // Add closing animation
        mobileMenu.classList.add('animate-slide-up');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('block', 'animate-slide-up');
        }, 250);
      }
    }

    // Update hamburger icon
    if (mobileMenuButton) {
      const spans = mobileMenuButton.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (this.isOpen) {
          if (index === 0) span.classList.add('rotate-45', 'translate-y-1.5');
          else if (index === 1) span.classList.add('opacity-0');
          else span.classList.add('-rotate-45', '-translate-y-1.5');
        } else {
          span.classList.remove('rotate-45', 'translate-y-1.5', 'opacity-0', '-rotate-45', '-translate-y-1.5');
        }
      });
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
    if (!header) return;

    // Check if current page has light background
    const isLightBgPage = this.lightBgPages.includes(this.currentPath);
    const shouldUseDarkText = this.scrolled || isLightBgPage;

    if (this.scrolled) {
      header.classList.remove('bg-transparent', 'bg-white/10');
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'card-shadow');
    } else if (isLightBgPage) {
      // Add subtle background on light pages for better visibility
      header.classList.add('bg-white/10', 'backdrop-blur-sm');
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'card-shadow', 'bg-transparent');
    } else {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'card-shadow', 'bg-white/10');
    }

    // Update logo text color
    const logoText = header.querySelector('.logo-text');
    if (logoText) {
      if (shouldUseDarkText) {
        logoText.classList.remove('text-white');
        logoText.classList.add('text-gray-900');
      } else {
        logoText.classList.remove('text-gray-900');
        logoText.classList.add('text-white');
      }
    }

    // Update desktop nav link colors
    document.querySelectorAll('.nav-link').forEach(link => {
      const isActive = link.getAttribute('href') === this.currentPath;
      // Remove all possible color classes
      link.classList.remove('text-red-600', 'text-gray-700', 'text-white', 'text-white/80');
      if (shouldUseDarkText) {
        link.classList.add(isActive ? 'text-red-600' : 'text-gray-700');
      } else {
        link.classList.add(isActive ? 'text-white' : 'text-white/80');
      }
    });

    // Update hamburger line colors
    header.querySelectorAll('.hamburger-line').forEach(line => {
      if (shouldUseDarkText) {
        line.classList.remove('bg-white');
        line.classList.add('bg-gray-900');
      } else {
        line.classList.remove('bg-gray-900');
        line.classList.add('bg-white');
      }
    });

    // Update CTA button
    const ctaBtn = header.querySelector('.nav-cta');
    if (ctaBtn) {
      if (shouldUseDarkText) {
        ctaBtn.classList.remove('bg-white', 'text-red-600', 'hover:bg-gray-100');
        ctaBtn.classList.add('bg-red-600', 'text-white', 'hover:bg-red-700');
      } else {
        ctaBtn.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700');
        ctaBtn.classList.add('bg-white', 'text-red-600', 'hover:bg-gray-100');
      }
    }

    // Update mobile menu links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      const isActive = link.getAttribute('href') === this.currentPath;
      link.classList.remove('bg-gray-100', 'text-red-600', 'text-gray-700', 'bg-white/20', 'text-white', 'text-white/80');
      if (shouldUseDarkText) {
        link.classList.add(isActive ? 'bg-gray-100' : '', isActive ? 'text-red-600' : 'text-gray-700');
      } else {
        link.classList.add(isActive ? 'bg-white/20' : '', isActive ? 'text-white' : 'text-white/80');
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
