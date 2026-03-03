// WaitlistCounter — persistent waitlist tally service
// Uses localStorage now; swap the get/increment methods for a real API when ready.

class WaitlistCounter {
  constructor() {
    this.STORAGE_KEY = 'rapidrescue_waitlist_count';
    // Listen for changes in other tabs so every open page stays in sync
    window.addEventListener('storage', (e) => {
      if (e.key === this.STORAGE_KEY) {
        this.refreshAllDisplays();
      }
    });
  }

  // ---- Data layer (replace these two methods with fetch() calls for a real backend) ----

  async getCount() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === null) {
      // Seed the counter so the tally starts from 505
      localStorage.setItem(this.STORAGE_KEY, 505);
      return 505;
    }
    return parseInt(stored, 10);
  }

  async increment() {
    const current = await this.getCount();
    const updated = current + 1;
    localStorage.setItem(this.STORAGE_KEY, updated);
    return updated;
  }

  // ---- UI helpers ----

  // Animate a number from `start` to `end` inside the given element
  animateCount(element, start, end, duration = 1200) {
    if (start === end) {
      element.textContent = end.toLocaleString();
      return;
    }
    const range = end - start;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(start + range * eased);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = end.toLocaleString();
      }
    };
    requestAnimationFrame(step);
  }

  // Update every element with class `waitlist-count` on the current page
  async refreshAllDisplays(animate = false) {
    const count = await this.getCount();
    document.querySelectorAll('.waitlist-count').forEach((el) => {
      if (animate) {
        const current = parseInt(el.textContent.replace(/,/g, ''), 10) || 0;
        this.animateCount(el, current, count);
      } else {
        el.textContent = count.toLocaleString();
      }
    });
  }
}

// Singleton available to every page
window.waitlistCounter = new WaitlistCounter();
