/**
 * Joele Elektriciteit - Main JavaScript
 * Modern, accessible, and performant website interactions
 */

(function() {
    'use strict';

    // ==========================================================================
    // DOM Elements
    // ==========================================================================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');

    // ==========================================================================
    // Header Scroll Effect
    // ==========================================================================
    function handleScroll() {
        const scrollPosition = window.scrollY;

        // Header shadow on scroll
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link based on scroll position
        updateActiveNavLink();
    }

    // ==========================================================================
    // Active Navigation Link
    // ==========================================================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==========================================================================
    // Mobile Navigation Toggle
    // ==========================================================================
    function toggleMobileNav() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileNav() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ==========================================================================
    // Smooth Scroll to Section
    // ==========================================================================
    function smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            const headerHeight = header.offsetHeight;
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }

    // ==========================================================================
    // Back to Top
    // ==========================================================================
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ==========================================================================
    // Cookie Consent
    // ==========================================================================
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setTimeout(() => {
            }, 2000);
        }
    }

        localStorage.setItem('cookieConsent', 'accepted');
        // Initialize analytics or other cookie-dependent features here
    }

        localStorage.setItem('cookieConsent', 'declined');
    }

    // ==========================================================================
    // Contact Form Handling
    // ==========================================================================
    function handleFormSubmit(event) {
        const form = event.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;

        // Check reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            event.preventDefault();
            alert('Gelieve de captcha te voltooien.');
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Verzenden...</span>';

        // Form will be handled by Netlify Forms
        // On success, Netlify redirects to a thank you page or shows a success message
    }

    // ==========================================================================
    // Intersection Observer for Animations
    // ==========================================================================
    function initAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements that should animate
        const animateElements = document.querySelectorAll(
            '.service-card, .why-card, .process-step, .about-grid > *'
        );

        animateElements.forEach(element => {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
    }

    // ==========================================================================
    // Phone Number Click Tracking
    // ==========================================================================
    function trackPhoneClick(event) {
        const href = event.currentTarget.getAttribute('href');
        if (href && href.startsWith('tel:')) {
            // Track phone click for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'Contact',
                    event_label: 'Phone Call',
                    value: href
                });
            }
        }
    }

    // ==========================================================================
    // Email Click Tracking
    // ==========================================================================
    function trackEmailClick(event) {
        const href = event.currentTarget.getAttribute('href');
        if (href && href.startsWith('mailto:')) {
            // Track email click for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'Contact',
                    event_label: 'Email',
                    value: href
                });
            }
        }
    }

    // ==========================================================================
    // Keyboard Accessibility
    // ==========================================================================
    function handleKeyboardNavigation(event) {
        // Close mobile nav on Escape
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileNav();
        }
    }

    // ==========================================================================
    // Initialize
    // ==========================================================================
    function init() {
        // Scroll events
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        // Mobile navigation
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }

        // Nav links - smooth scroll and close mobile menu
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    event.preventDefault();
                    smoothScrollTo(href);
                    closeMobileNav();
                }
            });
        });

        // All anchor links with hash
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (event) => {
                const href = anchor.getAttribute('href');
                if (href && href.length > 1) {
                    event.preventDefault();
                    smoothScrollTo(href);
                }
            });
        });

        // Back to top button
        if (backToTop) {
            backToTop.addEventListener('click', scrollToTop);
        }

        // Cookie consent
            }
            }
        }

        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        // Track contact clicks
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', trackPhoneClick);
        });
        document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
            link.addEventListener('click', trackEmailClick);
        });

        // Keyboard accessibility
        document.addEventListener('keydown', handleKeyboardNavigation);

        // Initialize animations
        initAnimations();

        // Log initialization (remove in production)
        console.log('Joele Elektriciteit website initialized');
    }

    // ==========================================================================
    // Start Application
    // ==========================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// ==========================================================================
// Animation CSS (added via JS for progressive enhancement)
// ==========================================================================
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-ready {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .animate-ready:nth-child(2) { transition-delay: 0.1s; }
    .animate-ready:nth-child(3) { transition-delay: 0.2s; }
    .animate-ready:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(animationStyles);
