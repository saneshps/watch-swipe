// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize carousel after a short delay to ensure Bootstrap is ready
    setTimeout(() => {
        const carousel = document.querySelector('#aboutCarousel');
        if (carousel) {
            // Re-initialize Lucide icons for carousel controls
            lucide.createIcons();
            
            // Initialize custom carousel indicators
            initCustomCarouselIndicators();
        }
    }, 100);
});

// Custom Carousel Indicators Function
function initCustomCarouselIndicators() {
    const carousel = document.querySelector('#aboutCarousel');
    const indicators = document.querySelectorAll('.carousel-indicators-custom button');
    
    if (!carousel || indicators.length === 0) return;
    
    // Update active indicator when carousel slides
    carousel.addEventListener('slid.bs.carousel', function (e) {
        // Remove active class from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.removeAttribute('aria-current');
        });
        
        // Add active class to current indicator
        const activeIndex = e.to; // Bootstrap provides the index
        if (indicators[activeIndex]) {
            indicators[activeIndex].classList.add('active');
            indicators[activeIndex].setAttribute('aria-current', 'true');
        }
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    });
    
    // Handle indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.to(index);
            }
        });
    });
}

// Re-initialize Lucide icons after carousel slide
const aboutCarousel = document.querySelector('#aboutCarousel');
if (aboutCarousel) {
    aboutCarousel.addEventListener('slid.bs.carousel', function () {
        lucide.createIcons();
    });
}

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
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
}

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

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Sending...';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            
            // Show success message
            const successMessage = document.getElementById('contactSuccessMessage');
            if (successMessage) {
                successMessage.style.display = 'flex';
                
                // Re-initialize Lucide icons
                lucide.createIcons();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
            
            // Reset form
            contactForm.reset();
        }, 1500);
    });
}

