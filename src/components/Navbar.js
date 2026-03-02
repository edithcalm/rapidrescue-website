class Navbar {
  constructor() {
    this.isOpen = false;
    this.scrolled = false;
    this.currentPath = window.location.pathname;
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const navbar = document.getElementById('navbar');
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
              <span class="font-bold text-xl text-gray-900">Rapid Rescue</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              ${this.renderNavLinks()}
            </div>

            <!-- Mobile Menu Button -->
            <button 
              id="mobile-menu-button" 
              class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div class="w-6 h-6 flex flex-col justify-center items-center">
                <span class="block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${this.isOpen ? 'rotate-45 translate-y-1.5' : ''}"></span>
                <span class="block w-6 h-0.5 bg-gray-900 transition-all duration-300 my-1 ${this.isOpen ? 'opacity-0' : ''}"></span>
                <span class="block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${this.isOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
              </div>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" class="md:hidden mt-4 pb-4 space-y-2 ${this.isOpen ? 'block' : 'hidden'}">
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

    return links.map(link => `
      <a 
        href="${link.to}" 
        class="nav-link text-gray-700 hover:text-red-600 transition-colors font-medium ${
          this.currentPath === link.to ? 'text-red-600' : ''
        }"
        data-route
      >
        ${link.label}
      </a>
    `).join('');
  }

  renderMobileNavLinks() {
    const links = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' }
    ];

    return links.map(link => `
      <a 
        href="${link.to}" 
        class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${
          this.currentPath === link.to ? 'bg-gray-100 text-red-600' : ''
        }"
        data-route
      >
        ${link.label}
      </a>
    `).join('');
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

    // Scroll event
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

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
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
      } else {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
      }
    }

    // Update hamburger icon
    if (mobileMenuButton) {
      const spans = mobileMenuButton.querySelectorAll('span');
      if (this.isOpen) {
        spans[0].classList.add('rotate-45', 'translate-y-1.5');
        spans[1].classList.add('opacity-0');
        spans[2].classList.add('-rotate-45', '-translate-y-1.5');
      } else {
        spans[0].classList.remove('rotate-45', 'translate-y-1.5');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-1.5');
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
    if (header) {
      if (this.scrolled) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-white/95', 'backdrop-blur-md', 'card-shadow');
      } else {
        header.classList.add('bg-transparent');
        header.classList.remove('bg-white/95', 'backdrop-blur-md', 'card-shadow');
      }
    }
  }

  updateActiveLink(path) {
    this.currentPath = path;
    
    // Update desktop links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('text-red-600');
        link.classList.remove('text-gray-700');
      } else {
        link.classList.remove('text-red-600');
        link.classList.add('text-gray-700');
      }
    });

    // Update mobile links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('bg-gray-100', 'text-red-600');
        link.classList.remove('text-gray-700');
      } else {
        link.classList.remove('bg-gray-100', 'text-red-600');
        link.classList.add('text-gray-700');
      }
    });

    // Close mobile menu on navigation
    this.closeMobileMenu();
  }
}

// Export for use in main app
window.Navbar = Navbar;
