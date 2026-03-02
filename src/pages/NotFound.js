class NotFound extends Page {
  async getHTML() {
    return `
      <main>
        <section class="min-h-[80vh] flex items-center justify-center bg-gray-50">
          <div class="container mx-auto px-4 max-w-2xl text-center">
            <div class="scroll-animate">
              <!-- 404 Number -->
              <div class="text-8xl md:text-9xl font-bold text-red-600 mb-8">404</div>
              
              <!-- Error Message -->
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p class="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                Oops! The page you're looking for seems to have vanished. Don't worry though, our emergency response system is still working perfectly.
              </p>
              
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" class="btn-primary" data-route>
                  Go Home
                </a>
                <a href="/contact" class="btn-secondary" data-route>
                  Contact Support
                </a>
              </div>
              
              <!-- Help Section -->
              <div class="mt-16 bg-white rounded-xl p-8 shadow-lg">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Looking for something specific?</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <h3 class="font-medium text-gray-900 mb-2">Popular Pages</h3>
                    <ul class="space-y-2">
                      <li><a href="/" class="text-red-600 hover:text-red-700 transition-colors" data-route>Home</a></li>
                      <li><a href="/about" class="text-red-600 hover:text-red-700 transition-colors" data-route>About Us</a></li>
                      <li><a href="/services" class="text-red-600 hover:text-red-700 transition-colors" data-route>Services</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900 mb-2">Get Help</h3>
                    <ul class="space-y-2">
                      <li><a href="/contact" class="text-red-600 hover:text-red-700 transition-colors" data-route>Contact Support</a></li>
                      <li><a href="/waitlist" class="text-red-600 hover:text-red-700 transition-colors" data-route>Join Waitlist</a></li>
                      <li><a href="mailto:info@rapidrescue.co.ke" class="text-red-600 hover:text-red-700 transition-colors">Email Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <!-- Emergency Info -->
              <div class="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                <div class="flex items-center justify-center mb-3">
                  ${this.getIcon('alert-triangle', 'w-6 h-6 text-red-600')}
                </div>
                <h3 class="font-semibold text-red-900 mb-2">Need Emergency Help?</h3>
                <p class="text-red-700 text-sm mb-3">
                  If you're experiencing an emergency, please contact emergency services immediately.
                </p>
                <p class="text-red-600 font-bold">Emergency: 999 / 112</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  getIcon(name, className = 'w-6 h-6') {
    const icons = {
      'alert-triangle': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>'
    };
    return icons[name] || '';
  }
}

// Export for use in main app
window.NotFound = NotFound;
