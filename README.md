# Intelligent Transport Systems Portfolio

A clean, responsive single-page portfolio website showcasing Intelligent Transport Systems (ITS) focusing on energy management and optimization.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with professional academic styling
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Interactive Elements**: Animated charts, hover effects, and dynamic navigation
- **Print Ready**: Optimized CSS for clean PDF export
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support

## 📁 File Structure

```
EnergyManagement/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling with dark mode
├── main.js            # JavaScript functionality
├── assets/            # SVG icons and illustrations
│   ├── transport-icon.svg
│   ├── energy-icon.svg
│   ├── communication-icon.svg
│   └── data-processing-icon.svg
└── README.md          # This file
```

## 🎯 Content Sections

1. **Header/Title** - Introduction with key statistics
2. **Introduction** - Overview of ITS and key features
3. **Energy Optimization** - Techniques and efficiency methods
4. **Communication Technology** - V2V, V2I, and power issues
5. **Information Extraction** - Data processing challenges and solutions
6. **Energy Efficiency Solutions** - Advanced optimization techniques
7. **Future Technologies** - IoV, CAV, V2X, and V2G systems
8. **BLE Weather Monitoring** - Practical implementation example
9. **Conclusion** - Summary and future scope
10. **References** - Academic sources and technical standards

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks - pure ES6+ JavaScript
- **Google Fonts**: Poppins font family for modern typography
- **SVG Icons**: Custom vector graphics for visual elements

## 🎨 Design Features

- **Color Scheme**: Blue and teal accents on clean white background
- **Typography**: Poppins font for modern, readable text
- **Animations**: Intersection Observer API for scroll animations
- **Charts**: CSS-based animated progress bars
- **Navigation**: Sticky navbar with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🖨️ Print Features

- Optimized print CSS for clean PDF export
- Hidden navigation and interactive elements
- Proper page breaks and formatting
- Print button functionality

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip links for screen readers
- High contrast mode support
- Reduced motion preferences

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No build process required**: All files are ready to run directly
3. **Local development**: Use a local server for best performance (optional)

### Using a Local Server (Optional)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Key Interactive Features

- **Theme Toggle**: Click the sun/moon icon to switch themes
- **Smooth Scrolling**: Click navigation links for smooth section scrolling
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Back to Top**: Floating button appears after scrolling
- **Print Portfolio**: Print button for PDF export
- **Animated Charts**: Energy savings visualization
- **Scroll Animations**: Sections fade in as you scroll

## 📊 Performance Optimizations

- Throttled scroll events for smooth performance
- Intersection Observer for efficient animations
- Optimized CSS with minimal reflows
- Compressed SVG icons
- Efficient JavaScript with debouncing

## 🔧 Customization

### Colors
Edit CSS custom properties in `:root` and `[data-theme="dark"]` sections:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #0d9488;
    --accent-color: #06b6d4;
    /* ... */
}
```

### Content
All content is in `index.html` - simply edit the text within each section.

### Animations
Modify animation timing and effects in the CSS `@keyframes` sections.

## 📚 Academic Context

This portfolio is designed for **Unit 5: Energy Systems** coursework, focusing on:
- Energy optimization in transportation systems
- Communication protocols and power management
- Data processing and information extraction
- Future technologies in intelligent transportation
- Practical implementation examples

## 🌟 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This is a student portfolio project for academic purposes.

---

**Ready to use!** Simply open `index.html` in your browser to view the portfolio.
