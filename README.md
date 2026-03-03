# Rapid Rescue Website

A modern, responsive emergency response platform website built with vanilla JavaScript, HTML, and CSS. The website showcases the Rapid Rescue service - a comprehensive emergency response system designed to eliminate response delays in Nairobi, Kenya.

## 🚀 Features

### Core Functionality
- **Multi-page SPA** - Single Page Application with hash-based routing
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Professional scroll animations and micro-interactions
- **Waitlist Integration** - Real-time Google Sheets integration for user signups
- **Dynamic Navbar** - Adaptive styling based on page backgrounds
- **Mobile Menu** - Enhanced hamburger menu with smooth animations

### Pages & Sections
- **Home** - Hero section, ecosystem overview, wearable features
- **About** - Company mission, statistics, core values
- **Services** - Service offerings, key features, pricing plans
- **Waitlist** - Interactive signup form with real-time counter
- **Contact** - Contact form and company information
- **404** - Custom not found page

### Technical Features
- **Component-Based Architecture** - Modular JavaScript classes
- **Google Apps Script Integration** - Webhook for form submissions
- **Real-time Counter** - Live user count from spreadsheet
- **Accessibility** - ARIA labels, keyboard navigation, reduced motion support
- **Performance Optimized** - Lazy loading, efficient animations

## 🛠️ Technology Stack

### Frontend
- **JavaScript (ES6+)** - Vanilla JavaScript with modern features
- **HTML5** - Semantic markup with accessibility in mind
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **CSS3** - Custom animations and transitions

### Backend Integration
- **Google Apps Script** - Serverless webhook for form handling
- **Google Sheets** - Database for waitlist management
- **JSONP** - Cross-domain data fetching for real-time updates

### Development Tools
- **VS Code Live Server** - Local development environment
- **Intersection Observer API** - Scroll-triggered animations
- **Fetch API** - HTTP requests for webhook integration

## 📁 Project Structure

```
rapidrescue-website/
├── public/                     # Static assets
│   ├── Bracelet 1.png         # Product images
│   ├── Bracelet 2.png
│   ├── Bracelet 3.png
│   └── index.html             # Main HTML file
├── src/
│   ├── components/            # Reusable components
│   │   ├── Navbar.js          # Navigation component
│   │   └── Footer.js          # Footer component
│   ├── core/                  # Core functionality
│   │   └── Page.js            # Base page class
│   ├── pages/                 # Page components
│   │   ├── Index.js           # Home page
│   │   ├── About.js           # About page
│   │   ├── Services.js        # Services page
│   │   ├── Waitlist.js        # Waitlist page
│   │   ├── Contact.js         # Contact page
│   │   └── NotFound.js        # 404 page
│   ├── scripts.js             # Main application router
│   └── styles.css             # Custom CSS and animations
├── google-apps-script.js      # Server-side webhook code
├── GOOGLE_APPS_SCRIPT_SETUP.md # Setup instructions
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser with ES6+ support
- Google Account (for spreadsheet integration)
- VS Code with Live Server extension (recommended)

### Local Development
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rapidrescue-website
   ```

2. **Start development server**
   - Open `public/index.html` in VS Code
   - Use Live Server extension (right-click → "Open with Live Server")
   - Or use any local web server

3. **Configure Google Apps Script** (Optional for waitlist)
   - Follow instructions in `GOOGLE_APPS_SCRIPT_SETUP.md`
   - Deploy the webhook and update the URL in `src/pages/Waitlist.js`

### Production Deployment
1. **Static Hosting**
   - Upload to any static hosting service (Netlify, Vercel, GitHub Pages)
   - Ensure all files are in the public directory

2. **Google Apps Script Setup**
   - Deploy the webhook with "Anyone" access
   - Update webhook URL in the code
   - Run `setupSpreadsheet()` function once

## 🔧 Configuration

### Environment Variables
The application uses hardcoded configuration. Update these values as needed:

```javascript
// In src/pages/Waitlist.js
const WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';

// In src/scripts.js
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

### Customization
- **Colors**: Modify CSS variables in `src/styles.css`
- **Content**: Update text content in respective page files
- **Animations**: Adjust timing and easing in CSS
- **Routing**: Add new routes in `src/scripts.js`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Features
- Enhanced hamburger menu with animations
- Touch-friendly interactions
- Optimized form layouts
- Swipe-friendly navigation

## 🎨 Design System

### Colors
- **Primary**: Red (rgb(239, 68, 68))
- **Secondary**: Gray scale
- **Accent**: White with transparency effects

### Typography
- **Headings**: Bold, large font sizes
- **Body**: Clean, readable fonts
- **Buttons**: Semibold, clear CTAs

### Animations
- **Duration**: 200ms - 600ms
- **Easing**: Cubic-bezier curves
- **Reduced Motion**: Respects user preferences

## 🔌 API Integration

### Google Apps Script Webhook
```javascript
// POST /waitlist
{
  "name": "John Doe",
  "email": "john@example.com", 
  "phone": "+254123456789",
  "city": "Nairobi",
  "interest": "early-access",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Real-time Counter
```javascript
// GET /?action=getCount&callback=callback_123
callback_123({
  "status": "success",
  "count": 42,
  "timestamp": "2024-01-01T12:00:00.000Z"
});
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Mobile menu functions properly
- [ ] Form submissions work (if configured)
- [ ] Animations are smooth
- [ ] Responsive design works
- [ ] Accessibility features work

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📊 Performance

### Optimization Features
- Lazy loading for animations
- Efficient DOM manipulation
- Optimized CSS transitions
- Minimal JavaScript footprint
- CDN-delivered Tailwind CSS

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Security

### Considerations
- **Form Validation**: Client-side and server-side validation
- **CORS Handling**: Proper CORS configuration for webhook
- **Data Privacy**: No sensitive data stored locally
- **HTTPS**: Recommended for production

### Recommendations
- Use HTTPS in production
- Implement rate limiting on webhook
- Validate all user inputs
- Regular security updates

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Make changes locally
3. Test thoroughly
4. Submit pull request

### Code Style
- Use ES6+ features
- Follow existing naming conventions
- Add comments for complex logic
- Maintain consistent formatting

## 📝 License

This project is proprietary to Rapid Rescue. All rights reserved.

## 📞 Support

### Documentation
- `GOOGLE_APPS_SCRIPT_SETUP.md` - Spreadsheet setup guide
- Code comments throughout the codebase
- Component documentation in JS files

### Contact
- For technical issues: Check code comments
- For business inquiries: Use contact form on website

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] Enhanced form validation
- [ ] Additional animation effects
- [ ] Performance monitoring
- [ ] A/B testing framework
- [ ] Analytics integration

### Known Issues
- None currently reported

---

**Built with ❤️ for the Rapid Rescue team**
