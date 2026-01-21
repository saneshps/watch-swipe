// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn.querySelector('i');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
        isMenuOpen = false;
        lucide.createIcons();
    });
});

// Smooth scroll for anchor links
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
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});