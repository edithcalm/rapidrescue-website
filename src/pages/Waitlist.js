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
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 scroll-animate">Join the Waitlist</h1>
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

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div class="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate" style="animation-delay: ${i * 80}ms">
                  <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 mb-4 transition-transform duration-300 hover:scale-110">
                    ${this.getIcon(benefit.icon, 'w-6 h-6 text-red-600')}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">${benefit.title}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${benefit.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Timeline Section -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Launch Timeline</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Here's what to expect as we prepare to launch Rapid Rescue.
              </p>
            </div>

            <div class="relative">
              <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
              ${[
                {
                  phase: 'Phase 1',
                  title: 'Waitlist Registration',
                  date: 'Now - Q1 2024',
                  desc: 'Sign up for early access and exclusive benefits',
                  completed: true
                },
                {
                  phase: 'Phase 2',
                  title: 'Beta Testing',
                  date: 'Q2 2024',
                  desc: 'Limited testing with waitlist members in Nairobi',
                  completed: false
                },
                {
                  phase: 'Phase 3',
                  title: 'Public Launch',
                  date: 'Q3 2024',
                  desc: 'Full public launch with all features available',
                  completed: false
                },
                {
                  phase: 'Phase 4',
                  title: 'Expansion',
                  date: 'Q4 2024',
                  desc: 'Expand to other major Kenyan cities',
                  completed: false
                }
              ].map((phase, i) => `
                <div class="relative flex items-center mb-12 scroll-animate" style="animation-delay: ${i * 150}ms">
                  <div class="flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}">
                    <div class="bg-white rounded-xl p-6 shadow-lg ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md">
                      <div class="flex items-center ${i % 2 === 0 ? 'justify-end' : ''} mb-2">
                        <span class="px-3 py-1 text-xs font-semibold rounded-full ${
                          phase.completed ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }">
                          ${phase.phase}
                        </span>
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900 mb-2">${phase.title}</h3>
                      <p class="text-sm text-gray-600 mb-2">${phase.date}</p>
                      <p class="text-gray-600 leading-relaxed">${phase.desc}</p>
                    </div>
                  </div>
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                    phase.completed ? 'bg-green-600' : 'bg-gray-300'
                  } border-4 border-white"></div>
                  <div class="flex-1"></div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join the Movement</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of Kenya's largest emergency response network.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center scroll-animate">
                <div class="text-4xl font-bold text-red-600 mb-2">
                  <span class="counter" data-count="5000">0</span>+
                </div>
                <p class="text-gray-600">Waitlist Members</p>
              </div>
              <div class="text-center scroll-animate" style="animation-delay: 100ms">
                <div class="text-4xl font-bold text-red-600 mb-2">
                  <span class="counter" data-count="15">0</span>
                </div>
                <p class="text-gray-600">Hospital Partners</p>
              </div>
              <div class="text-center scroll-animate" style="animation-delay: 200ms">
                <div class="text-4xl font-bold text-red-600 mb-2">
                  <span class="counter" data-count="30">0</span>
                </div>
                <p class="text-gray-600">Security Firms</p>
              </div>
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="form-label">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              class="form-input" 
              placeholder="John"
              required
            />
          </div>
          <div>
            <label for="lastName" class="form-label">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              class="form-input" 
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div>
          <label for="email" class="form-label">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            class="form-input" 
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div>
          <label for="phone" class="form-label">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            class="form-input" 
            placeholder="+254 700 000 000"
            required
          />
        </div>

        <div>
          <label for="county" class="form-label">County/Region</label>
          <select id="county" name="county" class="form-input" required>
            <option value="">Select your county</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
            <option value="kisumu">Kisumu</option>
            <option value="nakuru">Nakuru</option>
            <option value="eldoret">Eldoret</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label for="plan" class="form-label">Interested Plan</label>
          <select id="plan" name="plan" class="form-input" required>
            <option value="">Select a plan</option>
            <option value="student">Student Plan (KES 100/month)</option>
            <option value="standard">Standard Plan (KES 500/month)</option>
            <option value="family">Family Plan (KES 1,200/month)</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label for="referral" class="form-label">How did you hear about us?</label>
          <select id="referral" name="referral" class="form-input">
            <option value="">Select an option</option>
            <option value="social-media">Social Media</option>
            <option value="friend">Friend or Family</option>
            <option value="news">News Article</option>
            <option value="event">Community Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="flex items-start">
          <input 
            type="checkbox" 
            id="terms" 
            name="terms"
            class="mt-1 mr-3"
            required
          />
          <label for="terms" class="text-sm text-gray-600">
            I agree to receive updates about Rapid Rescue and understand that my information will be used to contact me about the service launch.
          </label>
        </div>

        <button 
          type="submit" 
          id="waitlist-submit"
          class="btn-primary w-full flex items-center justify-center"
          ${this.submitting ? 'disabled' : ''}
        >
          ${this.submitting ? '<div class="spinner mr-2"></div>Joining...' : 'Join Waitlist'}
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
        
        // Simulate API call
        setTimeout(() => {
          this.submitted = true;
          this.submitting = false;
          submitBtn.disabled = false;
          
          // Re-render the page with success message
          this.render();
          
          // Setup counters for stats
          this.setupCounters();
        }, 2000);
      });
    }

    // Setup counters if not submitted
    if (!this.submitted) {
      this.setupCounters();
    }
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
