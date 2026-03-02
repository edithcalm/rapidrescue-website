class Services extends Page {
  constructor(path) {
    super(path);
    this.services = [
      {
        icon: 'ambulance',
        title: "Medical Emergency Response",
        desc: "When an emergency is triggered, a digital patient profile, including blood type, allergies, and pre-existing conditions, is transmitted instantly to the nearest hospital. Responders arrive informed and ready to act.",
        tag: "Active",
      },
      {
        icon: 'shield-alert',
        title: "Personal Safety Response",
        desc: "Alerts are routed simultaneously to private security firms and nearby users. Geolocation ensures the closest available responder is dispatched, while your personal circle is notified in real time.",
        tag: "Active",
      },
      {
        icon: 'users',
        title: "Community Bystander Relay",
        desc: "Nearby users within 50 to 100 meters receive an alert with live EMT guidance, enabling them to provide critical first aid while professional help is on the way.",
        tag: "Active",
      },
      {
        icon: 'credit-card',
        title: "Insurance Integration",
        desc: "A future phase will enable seamless integration with insurance providers, allowing automated claims processing and coverage verification during emergencies.",
        tag: "Future Phase",
      },
    ];
  }

  async getHTML() {
    return `
      <main>
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 scroll-animate">Our Services</h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto scroll-animate">
              Comprehensive emergency response solutions designed to save lives through technology and community collaboration.
            </p>
          </div>
        </section>

        <!-- Services Grid -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              ${this.services.map((service, i) => `
                <div class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate" style="animation-delay: ${i * 150}ms">
                  <div class="flex items-start justify-between mb-6">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 transition-transform duration-300 hover:scale-110">
                      ${this.getIcon(service.icon, 'w-6 h-6 text-red-600')}
                    </div>
                    <span class="px-3 py-1 text-xs font-semibold rounded-full ${
                      service.tag === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }">
                      ${service.tag}
                    </span>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">${service.title}</h3>
                  <p class="text-gray-600 leading-relaxed">${service.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- How It Works -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                From emergency trigger to professional response, here's how our system saves precious minutes.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              ${[
                { step: '1', title: 'Emergency Triggered', desc: 'User activates emergency alert via wearable device or mobile app' },
                { step: '2', title: 'Data Transmitted', desc: 'Medical profile and location sent to nearby responders and hospitals' },
                { step: '3', title: 'Community Alert', desc: 'Nearby users and security firms notified with precise location' },
                { step: '4', title: 'Coordinated Response', desc: 'Professional responders arrive with complete patient information' }
              ].map((item, i) => `
                <div class="text-center scroll-animate" style="animation-delay: ${i * 100}ms">
                  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-xl font-bold mb-6 transition-transform duration-300 hover:scale-110">
                    ${item.step}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">${item.title}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Features -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Advanced technology and smart design make Rapid Rescue the most effective emergency response system.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${[
                { icon: 'map-pin', title: 'Precise Geolocation', desc: 'Accurate location tracking within 5 meters for rapid response' },
                { icon: 'database', title: 'Medical Profiles', desc: 'Secure storage of critical medical information for instant access' },
                { icon: 'smartphone', title: 'Mobile Integration', desc: 'Seamless connection with smartphones for enhanced functionality' },
                { icon: 'shield', title: 'Privacy First', desc: 'End-to-end encryption protects sensitive personal data' },
                { icon: 'zap', title: 'Instant Alerts', desc: 'Sub-second notification to all relevant responders' },
                { icon: 'users', title: 'Community Network', desc: 'Leverage nearby users for immediate assistance' }
              ].map((feature, i) => `
                <div class="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate" style="animation-delay: ${i * 80}ms">
                  <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 mb-4 transition-transform duration-300 hover:scale-110">
                    ${this.getIcon(feature.icon, 'w-6 h-6 text-red-600')}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">${feature.title}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${feature.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Pricing Section -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accessible Pricing</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Emergency response should be accessible to everyone. Our pricing reflects this commitment.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${[
                {
                  name: 'Student Plan',
                  price: 'KES 100',
                  period: '/month',
                  features: [
                    'Basic emergency alerts',
                    'Community response network',
                    'Mobile app access',
                    'Basic medical profile'
                  ],
                  highlighted: false
                },
                {
                  name: 'Standard Plan',
                  price: 'KES 500',
                  period: '/month',
                  features: [
                    'All Student features',
                    'Professional responder alerts',
                    'Hospital integration',
                    'Advanced medical profile',
                    'Priority routing'
                  ],
                  highlighted: true
                },
                {
                  name: 'Family Plan',
                  price: 'KES 1,200',
                  period: '/month',
                  features: [
                    'Up to 5 family members',
                    'All Standard features',
                    'Family coordination',
                    'Shared emergency contacts',
                    'Priority support'
                  ],
                  highlighted: false
                }
              ].map((plan, i) => `
                <div class="rounded-xl p-8 ${
                  plan.highlighted 
                    ? 'bg-red-600 text-white shadow-xl scale-105' 
                    : 'bg-white shadow-lg'
                } transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate" style="animation-delay: ${i * 100}ms">
                  ${plan.highlighted ? '<div class="text-center mb-4"><span class="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span></div>' : ''}
                  <h3 class="text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'} mb-2">${plan.name}</h3>
                  <div class="mb-6">
                    <span class="text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}">${plan.price}</span>
                    <span class="${plan.highlighted ? 'text-white/80' : 'text-gray-600'}">${plan.period}</span>
                  </div>
                  <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                      <li class="flex items-center ${plan.highlighted ? 'text-white' : 'text-gray-600'}">
                        <svg class="w-5 h-5 ${plan.highlighted ? 'text-white' : 'text-red-600'} mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        ${feature}
                      </li>
                    `).join('')}
                  </ul>
                  <a href="/waitlist" class="block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.highlighted 
                      ? 'bg-white text-red-600 hover:bg-gray-100' 
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }" data-route>
                    Join Waitlist
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 md:py-28 bg-red-600">
          <div class="container mx-auto px-4 max-w-4xl text-center scroll-animate">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p class="text-white/80 mb-8 max-w-lg mx-auto">
              Join thousands of Kenyans who are already part of the emergency response revolution.
            </p>
            <a href="/waitlist" class="btn-primary bg-white text-red-600 hover:bg-gray-100" data-route>
              Join the Waitlist
            </a>
          </div>
        </section>
      </main>
    `;
  }

  getIcon(name, className = 'w-6 h-6') {
    const icons = {
      'ambulance': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 17H4a1 1 0 01-1-1v-3a1 1 0 011-1h1m4.5 4h5.5a1 1 0 001-1v-3a1 1 0 00-1-1h-1m-8.5 4V8a2 2 0 012-2h8a2 2 0 012 2v8m-8 0h8m-8 0l2-2m6 2l2-2"></path></svg>',
      'shield-alert': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>',
      'users': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
      'credit-card': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
      'map-pin': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
      'database': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>',
      'smartphone': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
      'zap': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
    };
    return icons[name] || '';
  }
}

// Export for use in main app
window.Services = Services;
