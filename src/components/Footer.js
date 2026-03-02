class Footer {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
      <footer class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="space-y-4">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-lg">RR</span>
                </div>
                <span class="font-bold text-xl">Rapid Rescue</span>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Transforming wearables, bystanders, hospitals, and security teams into one synchronized emergency ecosystem in Kenya.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="/" class="text-gray-400 hover:text-white transition-colors" data-route>Home</a></li>
                <li><a href="/about" class="text-gray-400 hover:text-white transition-colors" data-route>About Us</a></li>
                <li><a href="/services" class="text-gray-400 hover:text-white transition-colors" data-route>Services</a></li>
                <li><a href="/contact" class="text-gray-400 hover:text-white transition-colors" data-route>Contact</a></li>
                <li><a href="/waitlist" class="text-gray-400 hover:text-white transition-colors" data-route>Join Waitlist</a></li>
              </ul>
            </div>

            <!-- Services -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Services</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Emergency Response</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Medical Alert System</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Community Network</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hospital Integration</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Security Coordination</a></li>
              </ul>
            </div>

            <!-- Contact -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Contact Info</h3>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p class="text-gray-400 text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p class="text-gray-400 text-sm">+254 700 000 000</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p class="text-gray-400 text-sm">info@rapidrescue.co.ke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="border-t border-gray-800 mt-8 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm">
                © 2024 Rapid Rescue. All rights reserved.
              </p>
              <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  setupEventListeners() {
    // Footer links will be handled by the main router
    // No additional event listeners needed for static footer
  }
}

// Export for use in main app
window.Footer = Footer;
