/**
 * Intelligent Transport Systems Portfolio - Main JavaScript
 * Handles smooth scrolling, dark mode, animations, and print functionality
 */

// ===== GLOBAL VARIABLES =====
let isDarkMode = false;
let scrollTimeout = null;

// ===== DOM ELEMENTS =====
let themeToggle, printBtn, backToTopBtn, hamburger, navMenu, navbar, navLinks, menuToggle;

// Initialize DOM elements
function initializeDOMElements() {
    themeToggle = document.getElementById('theme-toggle');
    printBtn = document.getElementById('print-btn');
    backToTopBtn = document.getElementById('back-to-top');
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    navbar = document.getElementById('navbar');
    navLinks = document.querySelectorAll('.nav-link');
    menuToggle = document.getElementById('menu-toggle');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Fallback initialization for pages that might load differently
window.addEventListener('load', function() {
    // Re-initialize DOM elements in case they weren't ready
    initializeDOMElements();
    
    // Re-initialize custom menu if it wasn't working
    if (menuToggle && !menuToggle.onclick) {
        initializeCustomMenu();
    }
});

function initializeApp() {
    // Initialize DOM elements first
    initializeDOMElements();
    
    // Initialize theme
    initializeTheme();
    
    // Initialize custom menu
    initializeCustomMenu();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize print functionality
    initializePrintFunctionality();
    
    // Initialize accessibility features
    initializeAccessibility();
    
    // Initialize animated footer
    initializeAnimatedFooter();
    
    // Initialize text animations
    initializeTextAnimations();
    
    // SVG animation is handled by CSS
    
    console.log('ITS Portfolio initialized successfully');
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    isDarkMode = savedTheme === 'dark';
    
    // Apply initial theme
    applyTheme();
    
    // Add event listener for theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
    
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Add visual feedback
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
}

function applyTheme() {
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// ===== CUSTOM MENU MANAGEMENT =====
function initializeCustomMenu() {
    console.log('Initializing custom menu...');
    
    // Re-find the menu toggle element
    menuToggle = document.getElementById('menu-toggle');
    
    if (menuToggle) {
        console.log('Menu toggle button found:', menuToggle);
        
        // Remove any existing event listeners
        menuToggle.onclick = null;
        
        // Add click event listener with more debugging
        menuToggle.addEventListener('click', function(event) {
            console.log('Menu button clicked!');
            event.preventDefault();
            event.stopPropagation();
            toggleCustomMenu();
        });
        
        // Add hover effect
        menuToggle.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        // Also add onclick as backup
        menuToggle.onclick = function(event) {
            console.log('Menu button clicked (onclick backup)!');
            event.preventDefault();
            event.stopPropagation();
            toggleCustomMenu();
        };
        
        console.log('Custom menu initialized successfully');
    } else {
        console.warn('Menu toggle button not found');
        
        // Try to find it again after a short delay
        setTimeout(() => {
            menuToggle = document.getElementById('menu-toggle');
            if (menuToggle) {
                console.log('Menu toggle found on retry');
                initializeCustomMenu();
            } else {
                console.error('Menu toggle button still not found after retry');
            }
        }, 500);
    }
}

function toggleCustomMenu() {
    document.body.classList.toggle("menu-toggled");
    
    // Add visual feedback
    if (menuToggle) {
        menuToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            menuToggle.style.transform = 'scale(1)';
        }, 150);
    }
    
    console.log('Menu toggled:', document.body.classList.contains('menu-toggled'));
}

function closeCustomMenu() {
    document.body.classList.remove("menu-toggled");
    console.log('Menu closed');
}

function closeCustomMenuWithAnimation() {
    // Add a special class for close animation
    document.body.classList.add("menu-closing");
    
    // Remove the menu-toggled class after a short delay
    setTimeout(() => {
        document.body.classList.remove("menu-toggled");
        document.body.classList.remove("menu-closing");
    }, 300);
    
    console.log('Menu closed with animation');
}

// ===== NAVIGATION MANAGEMENT =====
function initializeNavigation() {
    // Mobile menu toggle (for old navigation - now hidden)
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Handle navigation links (no smooth scrolling for multi-page)
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                // Close mobile menu when clicking on a link
                closeMobileMenu();
                
                // Add visual feedback for navigation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
    
    // Handle custom menu links
    const menuLinks = document.querySelectorAll('#menu-links .link');
    if (menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const href = this.getAttribute('href');
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                
                // Check if clicking on the current page
                if (href === currentPage || (href === 'index.html' && currentPage === '')) {
                    // Add close animation for same section
                    event.preventDefault();
                    closeCustomMenuWithAnimation();
                } else {
                    // Close custom menu when clicking on a different link
                    closeCustomMenu();
                }
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
    
    // Close mobile menu when clicking outside
    if (navbar) {
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target)) {
                closeMobileMenu();
            }
        });
    }
    
    // Close custom menu when clicking outside
    const menu = document.getElementById('menu');
    if (menu) {
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && document.body.classList.contains('menu-toggled')) {
                closeCustomMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Update aria-expanded for accessibility
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}

// Remove smooth scrolling function as it's not needed for multi-page navigation

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', handleScroll);
    
    // Back to top button visibility
    window.addEventListener('scroll', handleBackToTop);
}

function handleScroll() {
    // Throttle scroll events for performance
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        
        // Add/remove navbar background based on scroll position
        if (scrollY > 50) {
            navbar.style.background = isDarkMode 
                ? 'rgba(15, 23, 42, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = isDarkMode 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }, 10);
}

function handleBackToTop() {
    const scrollY = window.scrollY;
    
    if (scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Remove active nav updating as it's handled by server-side active states in multi-page structure

// Back to top functionality
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections and key elements
    const elementsToAnimate = document.querySelectorAll('.section, .feature-item, .technique-item, .solution-card, .tech-item, .future-item');
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
    
    // Animate chart bars on scroll
    const chartBars = document.querySelectorAll('.bar-fill');
    const chartObserver = new IntersectionObserver(animateChartBars, {
        threshold: 0.5
    });
    
    chartBars.forEach(bar => {
        chartObserver.observe(bar);
    });
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}

function animateChartBars(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            
            // Reset width and animate
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            
            // Stop observing this element
            chartObserver.unobserve(bar);
        }
    });
}

// ===== PRINT FUNCTIONALITY =====
function initializePrintFunctionality() {
    printBtn.addEventListener('click', handlePrint);
}

function handlePrint() {
    // Add print-specific styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .navbar, .nav-controls, .back-to-top, .hamburger { display: none !important; }
            body { background: white !important; color: black !important; }
            .header { min-height: auto; background: white !important; }
            .section { page-break-inside: avoid; }
            .feature-item, .technique-item, .solution-card { page-break-inside: avoid; }
        }
    `;
    document.head.appendChild(printStyles);
    
    // Trigger print dialog
    window.print();
    
    // Remove print styles after printing
    setTimeout(() => {
        document.head.removeChild(printStyles);
    }, 1000);
}

// ===== ACCESSIBILITY FEATURES =====
function initializeAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Add focus management for mobile menu
    hamburger.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMobileMenu();
        }
    });
    
    // Add ARIA labels and roles
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('role', 'button');
    
    // Add skip link functionality
    addSkipLink();
}

function handleKeyboardNavigation(event) {
    // Escape key closes menus
    if (event.key === 'Escape') {
        closeMobileMenu();
        closeCustomMenu();
    }
    
    // Tab navigation enhancement
    if (event.key === 'Tab') {
        // Ensure focus is visible
        document.body.classList.add('keyboard-navigation');
    }
}

function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Optimize scroll events
const optimizedScrollHandler = throttle(handleScroll, 16); // ~60fps
const optimizedBackToTopHandler = throttle(handleBackToTop, 100);

// Replace original scroll handlers
window.removeEventListener('scroll', handleScroll);
window.removeEventListener('scroll', handleBackToTop);
window.addEventListener('scroll', optimizedScrollHandler);
window.addEventListener('scroll', optimizedBackToTopHandler);

// ===== ERROR HANDLING =====
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    // Could implement error reporting here
});

// ===== PROGRESSIVE ENHANCEMENT =====
// Check if JavaScript is enabled
document.documentElement.classList.add('js-enabled');

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Remove any loading indicators
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.style.display = 'none';
    });
});

// ===== ANALYTICS & TRACKING (Optional) =====
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Track section views
    if (eventName === 'section_view') {
        // Could send to analytics service
    }
}

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            trackEvent('section_view', { section: sectionId });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// SVG animation is handled directly by the browser

// ===== ANIMATED FOOTER =====
function initializeAnimatedFooter() {
    const bubblesContainer = document.querySelector('.footer .bubbles');
    if (!bubblesContainer) return;
    
    // Clear existing bubbles
    bubblesContainer.innerHTML = '';
    
    // Generate 128 bubbles
    for (let i = 0; i < 128; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random properties for each bubble
        const size = 2 + Math.random() * 4; // 2-6rem
        const distance = 6 + Math.random() * 4; // 6-10rem
        const position = -5 + Math.random() * 110; // -5% to 105%
        const time = 2 + Math.random() * 2; // 2-4s
        const delay = -1 * (2 + Math.random() * 2); // -2 to -4s
        
        // Set CSS custom properties
        bubble.style.setProperty('--size', `${size}rem`);
        bubble.style.setProperty('--distance', `${distance}rem`);
        bubble.style.setProperty('--position', `${position}%`);
        bubble.style.setProperty('--time', `${time}s`);
        bubble.style.setProperty('--delay', `${delay}s`);
        
        bubblesContainer.appendChild(bubble);
    }
    
    console.log('Animated footer initialized with 128 bubbles');
}

// ===== TEXT ANIMATIONS =====
function initializeTextAnimations() {
    console.log('Initializing text animations...');
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        const sectionTitles = document.querySelectorAll('.section-title');
        console.log('Found section titles:', sectionTitles.length);
        
        if (sectionTitles.length === 0) {
            console.log('No section titles found, retrying...');
            // Retry after a longer delay
            setTimeout(() => {
                const retryTitles = document.querySelectorAll('.section-title');
                console.log('Retry found section titles:', retryTitles.length);
                processTitles(retryTitles);
            }, 1000);
        } else {
            processTitles(sectionTitles);
        }
    }, 100);
}

function processTitles(sectionTitles) {
    sectionTitles.forEach((title, index) => {
        const text = title.textContent.trim();
        console.log(`Processing title ${index + 1}: "${text}"`);
        
        if (text) {
            // Store original text
            const originalText = text;
            title.innerHTML = '';
            
            // Create animated title wrapper
            const animatedWrapper = document.createElement('span');
            animatedWrapper.className = 'animated-title gradient-title';
            
            // Split text into individual characters
            for (let i = 0; i < originalText.length; i++) {
                const char = originalText[i];
                const span = document.createElement('span');
                
                if (char === ' ') {
                    span.innerHTML = '&nbsp;';
                } else {
                    span.textContent = char;
                }
                
                // Add a small delay to each character
                span.style.animationDelay = `${i * 0.1}s`;
                
                animatedWrapper.appendChild(span);
            }
            
            title.appendChild(animatedWrapper);
            console.log(`Applied animation to: "${originalText}"`);
        }
    });
    
    console.log('Text animations initialization complete');
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme,
        handlePrint,
        initializeApp
    };
}
