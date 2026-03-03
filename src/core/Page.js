class Page {
    constructor(path) {
        this.path = path;
    }

    async render() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = await this.getHTML();
            this.setupEventListeners();
            this.setupAnimations();
            
            // Initialize waitlist counters with real-time data
            if (window.updateAllWaitlistCounters) {
                setTimeout(async () => {
                    await window.updateAllWaitlistCounters(false);
                }, 500);
            }
        }
    }

    async getHTML() {
        return '<div class="container mx-auto px-4 py-8"><h1>Page not implemented</h1></div>';
    }

    getIcon(name, className = 'w-6 h-6') {
        // Default implementation or placeholder
        return '';
    }

    setupEventListeners() {
        // Override in subclasses
    }

    setupAnimations() {
        // Setup scroll animations
        this.setupScrollAnimations();
        
        // Setup staggered animations
        this.setupStaggeredAnimations();
        
        // Setup scroll indicator
        this.setupScrollIndicator();
        
        // Setup entrance animations
        this.setupEntranceAnimations();
    }

    setupScrollAnimations() {
        const elements = document.querySelectorAll('.scroll-animate');
        if (elements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add pulse effect to important elements
                    if (entry.target.classList.contains('pulse-on-visible')) {
                        setTimeout(() => {
                            entry.target.classList.add('pulse-once');
                        }, 300);
                    }
                }
            });
        }, { 
            threshold: 0.1, 
            rootMargin: '0px 0px -50px 0px' 
        });

        elements.forEach(el => observer.observe(el));
    }

    setupStaggeredAnimations() {
        const staggerContainers = document.querySelectorAll('.stagger-container');
        
        staggerContainers.forEach(container => {
            const items = container.querySelectorAll('.stagger-item');
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                    observer.unobserve(container);
                }
            }, { threshold: 0.1 });
            
            observer.observe(container);
        });
    }

    setupScrollIndicator() {
        // Create scroll indicator
        let indicator = document.querySelector('.scroll-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'scroll-indicator';
            document.body.appendChild(indicator);
        }

        // Update scroll progress
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            indicator.style.width = scrollProgress + '%';
        };

        // Initial update and scroll listener
        updateScrollProgress();
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
    }

    setupEntranceAnimations() {
        // Add entrance animations to cards
        const cards = document.querySelectorAll('.card-hover');
        cards.forEach((card, index) => {
            card.classList.add('card-animate');
            
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        });

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, .btn-primary, .btn-secondary');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-1px)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
            });
        });
    }
}

// Export for use in main app
window.Page = Page;
