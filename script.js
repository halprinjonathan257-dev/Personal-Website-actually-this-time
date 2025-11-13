// Mobile Navigation Toggle
const HEADER_OFFSET = 70;

function getScrollStep() {
    return Math.max(window.innerHeight * 0.85, 400);
}

function scrollArrowClickHandler() {
    const currentScroll = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (currentScroll >= maxScroll - 2) {
        return;
    }

    let targetScroll;

    if (window.innerWidth <= 768 && currentScroll < 60) {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const aboutTop = aboutSection.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 10;
            targetScroll = Math.min(aboutTop, maxScroll);
        }
    }

    if (typeof targetScroll === 'undefined') {
        targetScroll = Math.min(currentScroll + getScrollStep(), maxScroll);
    }

    window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Add animation on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', scrollArrowClickHandler);
    }

    const animatedElements = document.querySelectorAll('.about-content, .skills');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});



