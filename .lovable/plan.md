

# Rapid Rescue Website Updates

## Summary of Changes

Based on your handwritten notes, here are all the changes to be made across the site:

---

### 1. Remove the City Background Image from Home Page Hero
Replace the Nairobi skyline photo background in the hero section with a clean gradient background using the brand red color, keeping the section visually strong without the AI-generated image.

### 2. Remove the Lady Wearing Bracelet Image
Remove the AI-generated model image from the wearable section on the homepage. The section will be restructured to focus on the three bracelet variants (Heritage, Stealth, Ocean) and the feature descriptions without the model photo.

### 3. Remove the "How We Think" Section from About Page
Delete the entire "How We Think" section (Total Response, Hybrid Model, Integration-Ready cards) from the About page.

### 4. Remove the Nairobi Urban Image from About Page
Remove the AI-generated Nairobi streets image from the About page Vision section. Restructure it to be a full-width text section.

### 5. Add Mission Page and Navigation Tab
Create a new Mission page (`/mission`) with:
- A section explaining **why** Rapid Rescue is solving this problem
- Real Kenyan statistical data to back up the mission (e.g., ambulance response times, road traffic fatality rates, Golden Hour statistics, Nairobi population density, private security density)
- Grounded, data-driven storytelling showing the smart, creative approach

Add "Mission" to the navigation bar between "About Us" and "Services".

### 6. Remove All Dashes (en-dashes and em-dashes)
Find and replace all instances of "–" across all pages with alternatives:
- "50–100 meters" becomes "50 to 100 meters"
- Any other dash usage will be replaced with "to" or rephrased

### 7. Remove the Map Feature from Contact Page
Remove the map placeholder section from the Contact page entirely.

### 8. Add Animations and Interactions
Add scroll-triggered animations and interactive hover effects across all pages:
- Fade-in-up animations on sections as they scroll into view (using Intersection Observer)
- Staggered card entrance animations
- Hover lift and shadow effects on cards
- Smooth button press feedback
- Animated counters for statistics on the Mission page
- Subtle scale transitions on icons

---

## Technical Details

### Files to Create
- `src/pages/Mission.tsx` -- New Mission page with Kenyan statistics and data-driven storytelling
- `src/hooks/useScrollAnimation.ts` -- Custom hook using Intersection Observer for scroll-triggered animations

### Files to Modify
- `src/pages/Index.tsx` -- Remove hero background image, remove model image, replace dashes, add scroll animations
- `src/pages/About.tsx` -- Remove "How We Think" section, remove urban image, replace dashes, add animations
- `src/pages/Services.tsx` -- Replace dashes, add animations
- `src/pages/Contact.tsx` -- Remove map placeholder, add animations
- `src/components/Navbar.tsx` -- Add "Mission" nav link
- `src/App.tsx` -- Add Mission route
- `src/index.css` -- Add animation keyframes for scroll-triggered effects
- `tailwind.config.ts` -- Add new animation utilities

### Kenyan Statistics to Include on Mission Page
- Average ambulance response time in Nairobi exceeds 60 minutes vs the recommended 8 minutes
- Kenya loses over 4,000 lives annually to road traffic incidents (NTSA data)
- Nairobi has over 4 million residents with limited emergency infrastructure
- Over 500,000 private security guards operate in Kenya, a largely untapped rapid-response asset
- The Golden Hour principle: survival rates drop significantly after 60 minutes without intervention

