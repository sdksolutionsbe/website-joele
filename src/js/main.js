/**
 * Joele Elektriciteit - Main JavaScript
 */

(function() {
    'use strict';

    var header = document.getElementById('header');
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    var navLinks = document.querySelectorAll('.nav-link');
    var backToTop = document.getElementById('backToTop');
    var contactForm = document.getElementById('contactForm');

    function handleScroll() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        updateActiveNavLink();
    }

    function updateActiveNavLink() {
        var sections = document.querySelectorAll('section[id]');
        var scrollPosition = window.scrollY + 150;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

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

    function smoothScrollTo(target) {
        var element = document.querySelector(target);
        if (element) {
            var headerHeight = header.offsetHeight;
            var elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function handleFormSubmit(event) {
        var form = event.target;
        var submitButton = form.querySelector('button[type="submit"]');

        if (typeof grecaptcha !== 'undefined') {
            var recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                event.preventDefault();
                alert('Gelieve de captcha te voltooien.');
                return;
            }
        }

        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Verzenden...</span>';
    }

    function initAnimations() {
        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        var animateElements = document.querySelectorAll(
            '.service-card, .why-card, .process-step, .about-grid > *'
        );

        animateElements.forEach(function(element) {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
    }

    function handleKeyboardNavigation(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileNav();
        }
    }

    function init() {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                var href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    event.preventDefault();
                    smoothScrollTo(href);
                    closeMobileNav();
                }
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(event) {
                var href = anchor.getAttribute('href');
                if (href && href.length > 1) {
                    event.preventDefault();
                    smoothScrollTo(href);
                }
            });
        });

        if (backToTop) {
            backToTop.addEventListener('click', scrollToTop);
        }

        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        document.addEventListener('keydown', handleKeyboardNavigation);
        initAnimations();

        console.log('Joele Elektriciteit website initialized');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// Animation CSS
var animationStyles = document.createElement('style');
animationStyles.textContent = '.animate-ready { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; } .animate-in { opacity: 1; transform: translateY(0); }';
document.head.appendChild(animationStyles);
