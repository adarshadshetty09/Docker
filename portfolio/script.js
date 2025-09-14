// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.querySelector('#contact-form');

// Performance optimization: Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Intersection Observer for better performance
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.contains('active');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    hamburger.setAttribute('aria-expanded', !isActive);
    
    // Focus management for accessibility
    if (!isActive) {
        const firstLink = navMenu.querySelector('.nav-link');
        if (firstLink) {
            firstLink.focus();
        }
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            
            // Respect user's motion preferences
            if (prefersReducedMotion) {
                window.scrollTo(0, offsetTop);
            } else {
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            }
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, scrollObserverOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-text, .contact-info');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Terminal animation
function animateTerminal() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 500);
    });
}

// Initialize lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Start terminal animation when page loads
window.addEventListener('load', () => {
    if (!prefersReducedMotion) {
    setTimeout(animateTerminal, 1000);
    }
});

// Enhanced contact form handling
if (contactForm) {
    console.log('Contact form found and initialized');
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Form submission started');
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name').trim(),
            email: formData.get('email').trim(),
            subject: formData.get('subject').trim(),
            message: formData.get('message').trim()
        };
        
        console.log('Form data:', data);
        
        // Validate all fields
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Check if online
            if (navigator.onLine) {
                // Submit form using real service
                const result = await submitContactForm(data);
                showNotification(result.message, 'success');
                contactForm.reset();
            } else {
                // Store for later when online
                storeOfflineMessage(data);
                showNotification('Message saved! Will send when you\'re back online.', 'info');
                contactForm.reset();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
} else {
    console.error('Contact form not found! Check if the form element exists in HTML.');
}

// Form validation functions
function validateForm(data) {
    let isValid = true;
    
    if (!data.name) {
        showFieldError('name', 'Name is required');
        isValid = false;
    }
    
    if (!data.email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!data.subject) {
        showFieldError('subject', 'Subject is required');
        isValid = false;
    }
    
    if (!data.message) {
        showFieldError('message', 'Message is required');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    switch (field.name) {
        case 'name':
            if (!value) {
                showFieldError(field.name, 'Name is required');
            }
            break;
        case 'email':
            if (!value) {
                showFieldError(field.name, 'Email is required');
            } else if (!isValidEmail(value)) {
                showFieldError(field.name, 'Please enter a valid email address');
            }
            break;
        case 'subject':
            if (!value) {
                showFieldError(field.name, 'Subject is required');
            }
            break;
        case 'message':
            if (!value) {
                showFieldError(field.name, 'Message is required');
            }
            break;
    }
}

function showFieldError(fieldName, message) {
    const field = contactForm.querySelector(`[name="${fieldName}"]`);
    const formGroup = field.closest('.form-group');
    
    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--error-color)';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    formGroup.appendChild(errorDiv);
    field.style.borderColor = 'var(--error-color)';
}

function clearFieldError(e) {
    const field = e.target;
    const formGroup = field.closest('.form-group');
    const error = formGroup.querySelector('.field-error');
    
    if (error) {
        error.remove();
        field.style.borderColor = '';
    }
}

// Real form submission using Formspree
async function submitContactForm(data) {
    console.log('Submitting to Formspree:', data);
    try {
        // Method 1: Using FormData (preferred by Formspree)
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('subject', data.subject);
        formData.append('message', data.message);
        formData.append('_replyto', data.email);
        formData.append('_subject', `Portfolio Contact: ${data.subject}`);
        
        console.log('Sending request to Formspree...');
        const response = await fetch('https://formspree.io/f/meoldbpz', {
            method: 'POST',
            body: formData
        });
        
        console.log('Formspree response status:', response.status);
        
        if (response.ok) {
            return { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' };
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Form submission failed');
        }
    } catch (error) {
        console.error('Formspree error:', error);
        
        // Fallback: Try JSON method
        try {
            const response = await fetch('https://formspree.io/f/meoldbpz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _replyto: data.email,
                    _subject: `Portfolio Contact: ${data.subject}`
                })
            });
            
            if (response.ok) {
                return { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' };
            } else {
                throw new Error('Form submission failed');
            }
        } catch (fallbackError) {
            console.error('Formspree fallback error:', fallbackError);
            throw new Error('Unable to send message. Please try again or contact me directly at adarshadshetty09@gmail.com');
        }
    }
    
    // Option 2: Netlify Forms (if hosting on Netlify)
    /*
    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('subject', data.subject);
        formData.append('message', data.message);
        
        const response = await fetch('/', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            return { success: true, message: 'Message sent successfully!' };
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Netlify Forms error:', error);
        throw error;
    }
    */
    
    // Option 3: EmailJS (Client-side email service)
    /*
    try {
        // Initialize EmailJS with your credentials
        emailjs.init('YOUR_PUBLIC_KEY');
        
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_email: 'adarshadshetty09@gmail.com'
        };
        
        const response = await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            templateParams
        );
        
        if (response.status === 200) {
            return { success: true, message: 'Message sent successfully!' };
        } else {
            throw new Error('EmailJS submission failed');
        }
    } catch (error) {
        console.error('EmailJS error:', error);
        throw error;
    }
    */
}

// Offline message storage
function storeOfflineMessage(data) {
    const messages = JSON.parse(localStorage.getItem('offlineMessages') || '[]');
    messages.push({
        ...data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('offlineMessages', JSON.stringify(messages));
}

// Send offline messages when back online
window.addEventListener('online', () => {
    const messages = JSON.parse(localStorage.getItem('offlineMessages') || '[]');
    if (messages.length > 0) {
        showNotification(`${messages.length} offline message(s) will be sent now.`, 'info');
        // Process offline messages here
        localStorage.removeItem('offlineMessages');
    }
});

// Test function to verify form is working (remove in production)
window.testContactForm = function() {
    console.log('Testing contact form...');
    console.log('Form element:', contactForm);
    console.log('Form action:', contactForm ? contactForm.action : 'Not found');
    console.log('Form method:', contactForm ? contactForm.method : 'Not found');
    
    if (contactForm) {
        // Fill form with test data
        contactForm.querySelector('[name="name"]').value = 'Test User';
        contactForm.querySelector('[name="email"]').value = 'test@example.com';
        contactForm.querySelector('[name="subject"]').value = 'Test Message';
        contactForm.querySelector('[name="message"]').value = 'This is a test message to verify the contact form is working.';
        
        console.log('Test data filled. You can now submit the form manually.');
    } else {
        console.error('Contact form not found!');
    }
};

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--error-color)' : 'var(--primary-color)'};
        color: var(--background-dark);
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation for hero title
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skill items hover effect
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Project cards 3D tilt effect
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseInt(target.replace(/[^\d]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        
        const updateCounter = () => {
            if (current < numericValue) {
                current += increment;
                let displayValue = Math.ceil(current);
                
                if (isPercentage) {
                    displayValue += '%';
                } else if (isPlus) {
                    displayValue += '+';
                }
                
                counter.textContent = displayValue;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loaded class styles
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--background-dark);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: 'Loading...';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--primary-color);
            font-size: 1.5rem;
            font-weight: 600;
            z-index: 10001;
        }
    `;
    document.head.appendChild(style);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Close notifications
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }
});

// Add focus styles for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary-color)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);