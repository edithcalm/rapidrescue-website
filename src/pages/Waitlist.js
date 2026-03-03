class Waitlist extends Page {
  constructor(path) {
    super(path);
    this.submitted = false;
    this.submitting = false;
  }

  async getHTML() {
    return `
      <main>
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 scroll-animate">Join the Wait List</h1>
            <div class="flex items-center justify-center gap-2 mb-4 scroll-animate">
              <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              <span class="text-2xl font-bold text-red-600 waitlist-count">0</span>
              <span class="text-2xl text-gray-500">People Already Joined</span>
            </div>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto scroll-animate">
              Be among the first to experience Rapid Rescue when we launch. Sign up for early access and updates.
            </p>
          </div>
        </section>

        <!-- Waitlist Form Section -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-2xl">
            <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 scroll-animate">
              ${this.submitted ? this.getSuccessMessage() : this.getForm()}
            </div>
          </div>
        </section>

        <!-- Benefits Section -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join the Waitlist?</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Get exclusive benefits and be part of the emergency response revolution.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              ${[
                {
                  icon: 'star',
                  title: 'Early Access',
                  desc: 'Be the first to use Rapid Rescue before public launch'
                },
                {
                  icon: 'tag',
                  title: 'Special Pricing',
                  desc: 'Get founding member discounts on all subscription plans'
                },
                {
                  icon: 'gift',
                  title: 'Free Wearable',
                  desc: 'First 100 members receive a free Rapid Rescue wearable device'
                },
                {
                  icon: 'users',
                  title: 'Community Priority',
                  desc: 'Priority placement in your local response network'
                },
                {
                  icon: 'zap',
                  title: 'Beta Features',
                  desc: 'Access to new features before they\'re released publicly'
                },
                {
                  icon: 'shield',
                  title: 'Enhanced Protection',
                  desc: 'Premium safety features included for early members'
                }
              ].map((benefit, i) => `
                <div class="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate card-hover stagger-item pulse-on-visible" style="animation-delay: ${i * 80}ms">
                  <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 mb-4 transition-transform duration-300 hover:scale-110 icon-container">
                    ${this.getIcon(benefit.icon, 'w-6 h-6 text-red-600')}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">${benefit.title}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${benefit.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      </main>
    `;
  }

  getForm() {
    return `
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
          ${this.getIcon('users', 'w-8 h-8 text-red-600')}
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Secure Your Spot</h2>
        <p class="text-gray-600">
          Fill out the form below to join thousands of Kenyans waiting for Rapid Rescue.
        </p>
      </div>

      <form id="waitlist-form" class="space-y-6">
        <div>
          <label for="fullName" class="form-label">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            class="form-input" 
            placeholder="Your name"
            required
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="email" class="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              class="form-input" 
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label for="phone" class="form-label">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              class="form-input" 
              placeholder="+254..."
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="city" class="form-label">City</label>
            <input 
              type="text" 
              id="city" 
              name="city"
              class="form-input" 
              placeholder="Nairobi"
              required
            />
          </div>
          <div>
            <label for="interest" class="form-label">Interest</label>
            <select id="interest" name="interest" class="form-input" required>
              <option value="">Select interest</option>
              <option value="early-access">Early Access User</option>
              <option value="investor">Investor</option>
              <option value="business">Business/ Corporate Partnership</option>
              <option value="other">Other</option>

            </select>
          </div>
        </div>

        <button 
          type="submit" 
          id="waitlist-submit"
          class="w-full flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-lg rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
          ${this.submitting ? 'disabled' : ''}
        >
          ${this.submitting ? '<div class="spinner mr-2"></div>Joining...' : 'Join the Waiting List <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>'}
        </button>
      </form>
    `;
  }

  getSuccessMessage() {
    return `
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          ${this.getIcon('check', 'w-8 h-8 text-green-600')}
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">You're on the List!</h2>
        <div class="flex items-center justify-center gap-2 mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          <span class="text-xl font-bold text-red-600 waitlist-count">0</span>
          <span class="text-xl text-gray-500">People Already Joined</span>
        </div>
        <p class="text-gray-600 mb-8">
          Thank you for joining the Rapid Rescue waitlist. We'll keep you updated on our launch timeline and send you exclusive early access information.
        </p>
        <div class="bg-gray-50 rounded-xl p-6 text-left">
          <h3 class="font-semibold text-gray-900 mb-4">What's Next?</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
              Check your email for a confirmation message
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
              We'll send launch updates as we approach our beta testing phase
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
              Early access invitations will be sent based on your location and plan preference
            </li>
          </ul>
        </div>
        <div class="mt-8">
          <a href="/" class="btn-secondary" data-route>Back to Home</a>
        </div>
      </div>
    `;
  }

  getIcon(name, className = 'w-6 h-6') {
    const icons = {
      'users': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
      'star': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>',
      'tag': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>',
      'gift': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>',
      'zap': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
      'shield': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
      'check': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
    };
    return icons[name] || '';
  }

  setupEventListeners() {
    const form = document.getElementById('waitlist-form');
    const submitBtn = document.getElementById('waitlist-submit');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (this.submitting) return;
        
        this.submitting = true;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="spinner mr-2"></div>Joining...';

        const formData = new FormData(form);
        
        // Prepare data for Google Apps Script
        const submissionData = {
          name: formData.get('fullName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          city: formData.get('city'),
          interest: formData.get('interest'),
          timestamp: new Date().toISOString()
        };

        try {
          // Send data to Google Apps Script webhook
          const response = await fetch('https://script.google.com/macros/s/AKfycby9NnUgDmKaqIxLk3fEoJS3VyW9ysq10gSBzSxUiabj4BjyOG4T8pIp2J9bZAPn9n92IQ/exec', {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData)
          });

          // Increment the persistent waitlist counter
          await window.waitlistCounter.increment();

          this.submitted = true;
          this.submitting = false;
          submitBtn.disabled = false;
          
          // Re-render the page with success message
          this.render();
          
          // Refresh counter display with animation
          await window.waitlistCounter.refreshAllDisplays(true);

          // Setup counters for stats
          this.setupCounters();
        } catch (error) {
          console.error('Error submitting to Google Apps Script:', error);
          
          // Still show success to user even if webhook fails
          this.submitted = true;
          this.submitting = false;
          submitBtn.disabled = false;
          this.render();
          this.setupCounters();
        }
      });
    }

    // Setup counters if not submitted
    if (!this.submitted) {
      this.setupCounters();
    }

    // Refresh the live waitlist tally on page load
    window.waitlistCounter.refreshAllDisplays(true);
  }

  setupCounters() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const target = parseInt(entry.target.getAttribute('data-count'));
          this.animateCounter(entry.target, target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
  }

  animateCounter(element, target) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  }
}

// Export for use in main app
window.Waitlist = Waitlist;
