// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        if (navUl) {
            navUl.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Animate sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact form handling
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Basic validation
        let isValid = true;
        const requiredFields = ['name', 'email', 'subject', 'message'];

        requiredFields.forEach(field => {
            const element = document.getElementById(field);
            if (element && (!data[field] || data[field].trim() === '')) {
                element.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (element) {
                element.style.borderColor = '#2e7d32';
            }
        });

        if (!isValid) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailElement = document.getElementById('email');
        if (emailElement && !emailRegex.test(data.email)) {
            emailElement.style.borderColor = '#e74c3c';
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Send form data to server (replace with your backend endpoint)
        fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                    contactForm.reset();
                } else {
                    throw new Error('Erreur lors de l\'envoi');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert('Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.');
            })
            .finally(() => {
                // Reset border colors
                requiredFields.forEach(field => {
                    const element = document.getElementById(field);
                    if (element) {
                        element.style.borderColor = '#e0e0e0';
                    }
                });
            });

        // Reset border colors
        requiredFields.forEach(field => {
            const element = document.getElementById(field);
            if (element) {
                element.style.borderColor = '#e0e0e0';
            }
        });
    });
}

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function () {
        this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        const img = this.querySelector('img');
        if (img) {
            // Create modal
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '10000';
            modal.style.cursor = 'pointer';

            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.objectFit = 'contain';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        }
    });
});

// Activity preview modal
const activityPreviews = document.querySelectorAll('.activity-preview');
activityPreviews.forEach(preview => {
    preview.addEventListener('click', function () {
        const img = this.querySelector('img');
        if (img) {
            // Create modal
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '10000';
            modal.style.cursor = 'pointer';

            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.objectFit = 'contain';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        }
    });
});

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '2rem';
scrollToTopBtn.style.right = '2rem';
scrollToTopBtn.style.background = '#007bff';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.width = '3rem';
scrollToTopBtn.style.height = '3rem';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.opacity = '0';
scrollToTopBtn.style.transition = 'opacity 0.3s ease';
scrollToTopBtn.style.zIndex = '1000';
scrollToTopBtn.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cookie consent functionality
const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = document.getElementById('accept-cookies');
const declineCookies = document.getElementById('decline-cookies');

if (cookieConsent && !localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 2000);
}

if (acceptCookies) {
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.classList.remove('show');
        // Enable Google Analytics here if needed
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    });
}

if (declineCookies) {
    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieConsent.classList.remove('show');
        // Disable Google Analytics
        gtag('consent', 'update', {
            'analytics_storage': 'denied'
        });
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        if (email) {
            // Here you would send the email to your newsletter service
            alert('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
            this.reset();
        }
    });
}