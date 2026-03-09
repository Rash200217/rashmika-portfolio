// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar background change on scroll (ALWAYS Dark Mode)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typed.js
if (document.querySelector('.typed-text')) {
    var typed = new Typed('.typed-text', {
        strings: ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        }
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Your message was sent successfully!');
            btn.innerHTML = originalText;
            btn.disabled = false;
            this.reset();
        }, 2000);
    });
}