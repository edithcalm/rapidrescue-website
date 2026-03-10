class About extends Page {
  constructor(path) {
    super(path);
    this.stats = [
      { icon: 'clock', value: 8, suffix: ' min', label: 'Average Emergency Response Time in Nairobi' },
      { icon: 'users', value: 85, suffix: '%', label: 'Survival Rate Increase with Early Response' },
      { icon: 'car', value: 45, suffix: '%', label: 'Time Reduction Through Smart Routing' },
      { icon: 'shield', value: 100, suffix: '%', label: 'Secure Medical Data Transmission' }
    ];

    this.values = [
      { icon: 'eye', title: 'Transparency', desc: 'Open communication about response times, system status, and integration progress.' },
      { icon: 'target', title: 'Precision', desc: 'Every second counts. Our system is optimized for speed and accuracy in emergency situations.' },
      { icon: 'heart-pulse', title: 'Life-First', desc: 'Human life is our highest priority. Every decision is made with this principle in mind.' }
    ];
  }

  async getHTML() {
    return `
      <main>
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="max-w-3xl mx-auto text-center scroll-animate">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">About WarnET</h1>
              <p class="text-lg text-gray-600 leading-relaxed">
                Eliminating Golden Hour delays by getting fast responses and wearables into life-saving data hubs.
              </p>
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${this.stats.map((stat, i) => `
                <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-lg text-center transition-all duration-700 hover:shadow-xl hover:-translate-y-1 scroll-animate" style="animation-delay: ${i * 100}ms">
                  <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-600/10 mb-5 transition-transform duration-300 hover:scale-110">
                    ${this.getIcon(stat.icon, 'w-7 h-7 text-red-600')}
                  </div>
                  <div class="text-4xl font-bold text-gray-900 mb-2" data-count="${stat.value}">
                    <span class="counter">0</span>${stat.suffix}
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed">${stat.label}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Mission Section -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                To create a world where emergency response is instantaneous, coordinated, and effective, saving lives through technology and community collaboration.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${this.values.map((value, i) => `
                <div class="text-center scroll-animate" style="animation-delay: ${i * 150}ms">
                  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-6 transition-transform duration-300 hover:scale-110">
                    ${this.getIcon(value.icon, 'w-8 h-8 text-red-600')}
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">${value.title}</h3>
                  <p class="text-gray-600 leading-relaxed">${value.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        
        <!-- Technology Section -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technology designed for reliability, speed, and scalability in emergency situations.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white rounded-xl p-8 shadow-lg scroll-animate">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Smart Routing Algorithm</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Our proprietary algorithm analyzes real-time traffic data, responder availability, and hospital capacity to determine the optimal response route.
                </p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Real-time traffic analysis
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Multi-factor responder matching
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Dynamic route optimization
                  </li>
                </ul>
              </div>

              <div class="bg-white rounded-xl p-8 shadow-lg scroll-animate" style="animation-delay: 100ms">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Secure Data Transmission</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Medical data is encrypted and transmitted securely to authorized responders only, ensuring privacy while enabling life-saving interventions.
                </p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    End-to-end encryption
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    HIPAA-compliant data handling
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    User consent management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }

  getIcon(name, className = 'w-6 h-6') {
    const icons = {
      'clock': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      'users': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
      'car': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8a2 2 0 01-2 2h-6m-6 0H5a2 2 0 01-2-2V7m16 0H3m0 0l2-2h12l2 2m-2 2v4m-4-4v4"></path></svg>',
      'shield': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
      'eye': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>',
      'target': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      'heart-pulse': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>'
    };
    return icons[name] || '';
  }

  setupEventListeners() {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const target = parseInt(entry.target.parentElement.getAttribute('data-count'));
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
window.About = About;
