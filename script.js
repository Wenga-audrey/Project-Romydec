// Bilingual language toggle functionality
function toggleLanguage() {
    const langToggleButton = document.getElementById('lang-toggle');
    langToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('english');
        document.body.classList.toggle('french');
    });
}

// Smooth scrolling
function smoothScroll() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Header scroll effect
function headerScrollEffect() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Intersection observer animations
function observeAnimations() {
    const elementsToAnimate = document.querySelectorAll('.animate');
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, options);
    elementsToAnimate.forEach(element => observer.observe(element));
}

// Mobile menu toggle
function mobileMenuToggle() {
    const menuToggleButton = document.getElementById('menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    menuToggleButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

// Professional interactions
// Placeholder for more professional interactions code.

// Initialize all functions
function init() {
    toggleLanguage();
    smoothScroll();
    headerScrollEffect();
    observeAnimations();
    mobileMenuToggle();
}

document.addEventListener('DOMContentLoaded', init);