// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const heroButtons = document.querySelectorAll('.cta-button[href^="#"]');
    
    function smoothScrollHandler(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollHandler);
    });
    heroButtons.forEach(button => {
        button.addEventListener('click', smoothScrollHandler);
    });

    // Enhanced sound wave animation
    const waveBars = document.querySelectorAll('.wave-bar-large');
    
    function animateWave() {
        waveBars.forEach(bar => {
            const randomHeight = Math.random() * 0.3 + 0.85; // Random height between 85% and 115%
            bar.style.transform = `scaleY(${randomHeight})`;
        });
    }

    // Animate waves every 100ms
    setInterval(animateWave, 100);

    // Add hover effect to show cards
    const showCards = document.querySelectorAll('.show-card');
    
    showCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.borderColor = '#ff6b35';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderColor = '#444';
        });
    });

    // Add scroll reveal animation
    const sections = document.querySelectorAll('.section');
    
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
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}); 