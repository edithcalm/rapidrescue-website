class Index extends Page {
  constructor(path) {
    super(path);
    this.ecosystemLayers = [
      {
        icon: 'shield',
        title: "Professional Response Layer",
        desc: "Alert sent via geolocation to the nearest hospital and private security firm. Real-time patient profile shared instantly.",
      },
      {
        icon: 'heart',
        title: "Personal Circle Layer",
        desc: "Emergency contacts are instantly notified with your location and status, keeping your loved ones informed.",
      },
      {
        icon: 'users',
        title: "Community Response Layer",
        desc: "Nearby users alerted within 50 to 100 meters, enabling bystander assistance before professional help arrives.",
      },
      {
        icon: 'activity',
        title: "Live Data Layer",
        desc: "Medical history, allergies, blood type, and conditions shared securely with first responders in real time.",
      },
    ];

    this.kenyaReasons = [
      { title: "Traffic Delays", desc: "Nairobi's congestion makes traditional ambulance response dangerously slow. Rapid Rescue routes around this." },
      { title: "Security Density", desc: "Kenya's extensive private security network becomes a rapid-response asset when integrated digitally." },
      { title: "Community Proximity", desc: "Dense urban neighborhoods mean trained bystanders can reach you within seconds, not minutes." },
      { title: "Student Access", desc: "A 100 Ksh accessibility plan ensures university students and young professionals can participate." },
    ];

    this.wearableFeatures = [
      { icon: 'radio', title: "Instant Alert Dispatch", desc: "Press once to send your GPS location and medical profile to the nearest hospital, private security, and your emergency contacts simultaneously." },
      { icon: 'watch', title: "Low-Energy Bluetooth + GPS", desc: "Syncs seamlessly with your phone for continuous location tracking while preserving battery life throughout the day." },
      { icon: 'smartphone', title: "Stylish & Discreet", desc: "Available in multiple African-inspired designs. Emergency tech that looks like fashion, not a medical device." },
    ];

    this.wearableVariants = [
      { name: "Heritage Edition", desc: "Vibrant African-inspired pattern" },
      { name: "Stealth Edition", desc: "Subtle, professional design" },
      { name: "Ocean Edition", desc: "Cool tones, relaxed style" },
    ];
  }

  async getHTML() {
    return `
      <main>
        <!-- Hero Section -->
        <section class="relative min-h-[90vh] flex items-center bg-gradient-to-br from-red-600 via-red-600 to-red-600/80">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_60%)]" />
          <div class="relative container mx-auto px-4 py-32 text-white max-w-4xl">
            <div class="max-w-2xl scroll-animate">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Integrated Emergency Response, Reimagined.
              </h1>
              <p class="text-lg sm:text-xl opacity-90 mb-10 leading-relaxed max-w-xl">
                Rapid Rescue transforms wearables, bystanders, hospitals, and security teams into one synchronized emergency ecosystem.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="/waitlist" class="btn-primary bg-white text-red-600 hover:bg-gray-100" data-route>
                  Join the Waitlist
                </a>
                <a href="#problem" class="btn-secondary border-white/30 text-white hover:bg-white/10">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Problem Section -->
        <section id="problem" class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl scroll-animate">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Problem</h2>
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-8">
                ${this.getIcon('alert-triangle', 'w-8 h-8 text-red-600')}
              </div>
            </div>
            <div class="max-w-3xl mx-auto text-center">
              <p class="text-lg text-gray-600 leading-relaxed">
                In emergencies, delays cost lives. Traffic congestion, fragmented response systems, and lack of real-time medical data slow down intervention. Every minute lost in the "Golden Hour" dramatically reduces survival rates.
              </p>
            </div>
          </div>
        </section>

        <!-- Ecosystem Section -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Rapid Rescue Ecosystem</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">Four synchronized layers working together to eliminate response delays.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              ${this.ecosystemLayers.map((layer, i) => `
                <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full scroll-animate" style="animation-delay: ${i * 100}ms">
                  <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 mb-5 transition-transform duration-300 hover:scale-110">
                    ${this.getIcon(layer.icon, 'w-6 h-6 text-red-600')}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">${layer.title}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${layer.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Wearable Section -->
        <section class="py-20 md:py-28 bg-gray-50">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Wearable That Connects You to Help</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">One tap sends your location, medical profile, and alert to responders, security, and your personal circle.</p>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              ${this.wearableFeatures.map((feature, i) => `
                <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate" style="animation-delay: ${i * 100}ms">
                  <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 mb-5 transition-transform duration-300 hover:scale-110">
                    ${this.getIcon(feature.icon, 'w-6 h-6 text-red-600')}
                  </div>
                  <h4 class="font-semibold text-gray-900 mb-2">${feature.title}</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">${feature.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Wearable Variants -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
              ${this.wearableVariants.map((variant, i) => `
                <div class="text-center group scroll-animate" style="animation-delay: ${i * 120}ms">
                  <div class="rounded-2xl bg-gray-100 p-6 mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div class="w-full max-w-[220px] mx-auto aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                      <span class="text-gray-500 text-sm">Wearable Image</span>
                    </div>
                  </div>
                  <h4 class="font-semibold text-gray-900 mb-1">${variant.name}</h4>
                  <p class="text-sm text-gray-600">${variant.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Why Kenya Section -->
        <section class="py-20 md:py-28">
          <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why It Matters in Kenya</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">Designed specifically for Nairobi's unique urban landscape and community dynamics.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              ${this.kenyaReasons.map((reason, i) => `
                <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full scroll-animate" style="animation-delay: ${i * 100}ms">
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">${reason.title}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${reason.desc}</p>
                </div>
              `).join('')}
            </div>
            <div class="text-center scroll-animate">
              <p class="text-xs text-gray-500 mt-8 max-w-xl mx-auto">
                Rapid Rescue follows an integration approach with existing infrastructure. No active partnerships are being claimed at this stage.
              </p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 md:py-28 bg-red-600">
          <div class="container mx-auto px-4 max-w-4xl text-center scroll-animate">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Be Part of the Solution?</h2>
            <p class="text-white/80 mb-8 max-w-lg mx-auto">Join the Rapid Rescue waitlist and be among the first to experience a new standard in emergency response.</p>
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
      'shield': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
      'heart': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
      'users': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
      'activity': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
      'radio': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>',
      'watch': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      'smartphone': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
      'alert-triangle': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>'
    };
    return icons[name] || '';
  }

  setupEventListeners() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// Export for use in main app
window.Index = Index;
