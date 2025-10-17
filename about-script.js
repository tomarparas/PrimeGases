// About Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hero carousel animation
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    function rotateCarousel() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Start carousel rotation
    setInterval(rotateCarousel, 4000);

    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect
                const year = entry.target.querySelector('.timeline-year');
                const content = entry.target.querySelector('.timeline-content');
                
                setTimeout(() => {
                    year.style.transform = 'scale(1)';
                    year.style.opacity = '1';
                }, 200);
                
                setTimeout(() => {
                    content.style.transform = 'translateX(0)';
                    content.style.opacity = '1';
                }, 400);
            }
        });
    }, observerOptions);

    // Initialize timeline items
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const year = item.querySelector('.timeline-year');
        const content = item.querySelector('.timeline-content');
        
        year.style.transform = 'scale(0)';
        year.style.opacity = '0';
        year.style.transition = 'all 0.4s ease';
        
        content.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        content.style.opacity = '0';
        content.style.transition = 'all 0.4s ease';
        
        timelineObserver.observe(item);
    });

    // Value cards animation
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        cardObserver.observe(card);
    });

    // Team cards hover effects
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add floating particles effect
            for (let i = 0; i < 3; i++) {
                const particle = document.createElement('div');
                particle.className = 'team-particle';
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 10 + 5}px;
                    height: ${Math.random() * 10 + 5}px;
                    background: rgba(37, 99, 235, 0.6);
                    border-radius: 50%;
                    pointer-events: none;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: teamParticleFloat 2s ease-out forwards;
                `;
                this.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 2000);
            }
        });
    });

    // Infrastructure highlights animation
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        const highlightObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    
                    // Add glow trail effect
                    const icon = entry.target.querySelector('.highlight-icon');
                    icon.style.animation = 'glow 2s ease-in-out infinite alternate, glowTrail 1s ease-out';
                }
            });
        }, observerOptions);
        
        highlightObserver.observe(item);
    });

    // Industry table row hover effects
    const tableRows = document.querySelectorAll('.table-row:not(.header)');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            // Create floating gas particles
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement('div');
                particle.className = 'gas-particle';
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(37, 99, 235, 0.7);
                    border-radius: 50%;
                    pointer-events: none;
                    left: ${Math.random() * 100}%;
                    top: 100%;
                    animation: gasParticleRise 1.5s ease-out forwards;
                `;
                this.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1500);
            }
        });
    });

    // Client logos animation
    const clientLogos = document.querySelectorAll('.client-logo');
    clientLogos.forEach((logo, index) => {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        const logoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        logoObserver.observe(logo);
    });

    // Smooth scrolling for navigation
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

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Button click effects
    document.querySelectorAll('button, .btn-primary, .btn-cta').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes teamParticleFloat {
            to {
                transform: translateY(-50px);
                opacity: 0;
            }
        }
        
        @keyframes glowTrail {
            0% {
                box-shadow: 0 0 5px rgba(37, 99, 235, 0.5);
            }
            100% {
                box-shadow: 0 0 30px rgba(37, 99, 235, 0.8), 0 0 60px rgba(37, 99, 235, 0.4);
            }
        }
        
        @keyframes gasParticleRise {
            to {
                transform: translateY(-100px);
                opacity: 0;
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .team-card {
            position: relative;
            overflow: hidden;
        }
        
        .table-row {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for promise section
    window.addEventListener('scroll', function() {
        const promiseSection = document.querySelector('.promise');
        const smokeBg = document.querySelector('.smoke-bg');
        
        if (promiseSection && smokeBg) {
            const rect = promiseSection.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                smokeBg.style.transform = `translateY(${rate}px)`;
            }
        }
    });

    // Initialize molecular animation in vision/mission cards
    const molecularBgs = document.querySelectorAll('.molecular-bg');
    molecularBgs.forEach(bg => {
        // Add random delay to molecular animation
        bg.style.animationDelay = `${Math.random() * 5}s`;
    });
});

// Intersection Observer for fade-in animations
function createFadeInObserver() {
    const fadeElements = document.querySelectorAll('.vm-card, .story-content p');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        fadeObserver.observe(element);
    });
}

// Initialize fade-in animations
createFadeInObserver();