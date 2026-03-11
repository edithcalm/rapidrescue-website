class Contact extends Page {
  constructor(path) {
    super(path);
    this.sent = false;
    this.sending = false;
  }

  async getHTML() {
    return `
      <main>
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 scroll-animate">Contact Us</h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto scroll-animate">
              Have questions or want to learn more? Reach out. We'd love to hear from you.
            </p>
          </div>
        </section>

        <!-- Contact Content -->
        <section class="py-12 md:py-16">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <!-- Contact Form -->
              <div class="scroll-animate">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form id="contact-form" class="space-y-6">
                  <div>
                    <label for="contactName" class="form-label">Name</label>
                    <input 
                      type="text" 
                      id="contactName" 
                      name="contactName"
                      class="form-input" 
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label for="contactEmail" class="form-label">Email</label>
                    <input 
                      type="email" 
                      id="contactEmail" 
                      name="contactEmail"
                      class="form-input" 
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label for="contactMessage" class="form-label">Message</label>
                    <textarea 
                      id="contactMessage" 
                      name="contactMessage"
                      class="form-input" 
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    id="contact-submit"
                    class="btn-primary bg-red-600 text-white hover:bg-red-700 hover-lift w-full flex items-center justify-center"
                    ${this.sending ? 'disabled' : ''}
                  >
                    ${this.sending ? '<div class="spinner mr-2"></div>Sending...' : 'Send Message'}
                  </button>
                </form>
                <div id="contact-success" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p class="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              </div>

              <!-- Contact Info -->
              <div class="space-y-8 scroll-animate" style="animation-delay: 200ms">
                <div>
                  <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p class="text-gray-600 leading-relaxed mb-8">
                    Whether you're interested in our services, want to partner with us, or have questions about emergency response, we're here to help.
                  </p>
                </div>

                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 flex-shrink-0">
                      ${this.getIcon('map-pin', 'w-6 h-6 text-red-600')}
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Office Location</h3>
                      <p class="text-gray-600">Manga House, 9 Kiambere Rd</p>
                      <p class="text-gray-600">Upper Hill, Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 flex-shrink-0">
                      ${this.getIcon('phone', 'w-6 h-6 text-red-600')}
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p class="text-gray-600">+254 721 606 409</p>
                      <p class="text-gray-600">+254 792 868 385</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 flex-shrink-0">
                      ${this.getIcon('mail', 'w-6 h-6 text-red-600')}
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                      <p class="text-gray-600">rapidrescue@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 md:py-24 bg-red-600">
          <div class="container mx-auto px-4 max-w-4xl text-center scroll-animate">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Want Early Access?</h2>
            <p class="text-white/80 mb-8 max-w-lg mx-auto">
              Be among the first to experience WarnET. Join our waitlist today.
            </p>
            <a href="/waitlist" class="btn-primary bg-white text-red-600 hover:bg-gray-100 hover-lift" data-route>
              Join the Waitlist
            </a>
          </div>
        </section>
      </main>
    `;
  }

  getIcon(name, className = 'w-6 h-6') {
    const icons = {
      'map-pin': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
      'phone': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
      'mail': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
    };
    return icons[name] || '';
  }

  setupEventListeners() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit');
    const successDiv = document.getElementById('contact-success');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (this.sending) return;
        
        this.sending = true;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="spinner mr-2"></div>Sending...';
        submitBtn.classList.add('loading');

        const formData = new FormData(form);
        const successDiv = document.getElementById('contact-success');
        
        // Simulate API call
        setTimeout(() => {
          this.sending = false;
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message';
          submitBtn.classList.remove('loading');
          
          // Show success message
          successDiv.classList.remove('hidden');
          successDiv.classList.add('slide-in-up');
          
          // Reset form
          form.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            successDiv.classList.add('fade-out');
            setTimeout(() => {
              successDiv.classList.add('hidden');
              successDiv.classList.remove('fade-out', 'slide-in-up');
            }, 500);
          }, 5000);
        }, 2000);
      });
    }
  }
}

// Export for use in main app
window.Contact = Contact;
