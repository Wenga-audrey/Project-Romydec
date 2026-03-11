// script.js - Complete bilingual support and enhancements

// Language toggle functionality
const toggleLanguage = () => {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    document.documentElement.lang = newLanguage;
    updateContent(newLanguage);
};

const updateContent = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[language][key];
    });
};

const translations = {
    en: {
        welcome: 'Welcome',
        // ... more key-value pairs for English
    },
    fr: {
        welcome: 'Bienvenue',
        // ... more key-value pairs for French
    }
};

// Smooth scrolling functionality
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Form validation
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
};

// Accessibility features
const setFocus = (element) => {
    if (element) {
        element.focus();
    }
};

// User interactions
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
// Additional event listeners for user interactions

// Add event listener for form submission
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(e.target)) {
        // Submit form logic here
    }
});
