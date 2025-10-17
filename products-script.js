// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hero carousel rotation
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    function rotateCarousel() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Start carousel rotation
    setInterval(rotateCarousel, 4000);

    // Vapor animation enhancement
    function createVaporParticles() {
        const vaporContainer = document.querySelector('.vapor-animation');
        if (!vaporContainer) return;

        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'dynamic-vapor';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 80 + 40}px;
                height: ${Math.random() * 80 + 40}px;
                background: rgba(83, 184, 228, 0.1);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                bottom: -50px;
                animation: dynamicVaporRise 15s ease-out forwards;
                pointer-events: none;
            `;
            
            vaporContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 15000);
        }, 3000);
    }

    // Gas cards hover effects
    const gasCards = document.querySelectorAll('.gas-card');
    gasCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create floating molecules
            for (let i = 0; i < 5; i++) {
                const molecule = document.createElement('div');
                molecule.className = 'gas-molecule';
                molecule.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 8 + 4}px;
                    height: ${Math.random() * 8 + 4}px;
                    background: rgba(83, 184, 228, 0.6);
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: moleculeFloat 2s ease-out forwards;
                    pointer-events: none;
                `;
                
                this.appendChild(molecule);
                
                setTimeout(() => {
                    if (molecule.parentNode) {
                        molecule.parentNode.removeChild(molecule);
                    }
                }, 2000);
            }
        });
    });

    // Industry cards vapor flow animation
    const industryCards = document.querySelectorAll('.industry-card');
    industryCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Create connecting vapor flow
            const vaporFlow = document.createElement('div');
            vaporFlow.className = 'vapor-flow';
            vaporFlow.style.cssText = `
                position: absolute;
                top: 50%;
                right: -20px;
                width: 40px;
                height: 2px;
                background: linear-gradient(90deg, transparent, rgba(83, 184, 228, 0.5), transparent);
                animation: vaporFlowMove 1s ease-out forwards;
                pointer-events: none;
            `;
            
            this.appendChild(vaporFlow);
            
            setTimeout(() => {
                vaporFlow.remove();
            }, 1000);
        });
    });

    // Quality stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue.includes('99.9%')) {
                    animateCounter(target, 0, 99.9, '99.9%');
                } else if (finalValue.includes('24×7')) {
                    target.style.animation = 'pulse 2s infinite';
                } else if (finalValue.includes('500+')) {
                    animateCounter(target, 0, 500, '500+');
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, start, end, suffix) {
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = start + (end - start) * easeOutCubic(progress);
            
            if (suffix.includes('%')) {
                element.textContent = current.toFixed(1) + '%';
            } else if (suffix.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = suffix;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger animation for grids
                if (entry.target.classList.contains('gas-grid') || 
                    entry.target.classList.contains('industries-grid') ||
                    entry.target.classList.contains('safety-grid')) {
                    const cards = entry.target.querySelectorAll('.gas-card, .industry-card, .safety-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Initialize scroll animations
    const animatedElements = document.querySelectorAll(
        '.promise-content, .gas-grid, .industries-grid, .safety-grid, .partners-logos, .testimonial'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        scrollObserver.observe(element);
    });

    // Initialize cards for stagger animation
    const cards = document.querySelectorAll('.gas-card, .industry-card, .safety-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Partner logos hover effects
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            // Create glow effect
            this.style.boxShadow = '0 10px 30px rgba(83, 184, 228, 0.3)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // CTA form interactions
    const ctaForm = document.querySelector('.cta-form');
    const formInputs = document.querySelectorAll('.cta-form input, .cta-form select, .cta-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            
            // Create focus particles
            createFocusParticles(this);
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    function createFocusParticles(element) {
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.className = 'focus-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #6FE0BF;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: focusParticleFloat 1.5s ease-out forwards;
                pointer-events: none;
            `;
            
            element.parentElement.style.position = 'relative';
            element.parentElement.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }
    }

    // Form submission
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-submit');
            
            // Create success animation
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form processing
            setTimeout(() => {
                submitBtn.textContent = 'Inquiry Sent! ✓';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Create success particles
                createSuccessParticles(submitBtn);
                
                setTimeout(() => {
                    submitBtn.textContent = 'Submit Inquiry';
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }

    function createSuccessParticles(button) {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: #10b981;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                animation: successParticleExplode 1s ease-out forwards;
                animation-delay: ${i * 0.1}s;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

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

    // Button click effects
    document.querySelectorAll('button, .gas-btn, .btn-primary, .btn-secondary, .btn-submit').forEach(btn => {
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

    // Parallax effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Quality section parallax
        const qualityBg = document.querySelector('.quality-bg');
        if (qualityBg) {
            qualityBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // CTA section parallax
        const ctaBg = document.querySelector('.cta-bg');
        if (ctaBg) {
            ctaBg.style.transform = `translateY(${scrolled * -0.2}px)`;
        }
    });

    // Initialize vapor particles
    createVaporParticles();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dynamicVaporRise {
            to {
                transform: translateY(-100vh) scale(2);
                opacity: 0;
            }
        }
        
        @keyframes moleculeFloat {
            to {
                transform: translateY(-50px);
                opacity: 0;
            }
        }
        
        @keyframes vaporFlowMove {
            to {
                right: -60px;
                opacity: 0;
            }
        }
        
        @keyframes focusParticleFloat {
            to {
                transform: translateY(-30px);
                opacity: 0;
            }
        }
        
        @keyframes successParticleExplode {
            to {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .gas-card, .industry-card, .safety-card {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Auto-resize textarea
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
});

// Molecular background animation
function initMolecularBackground() {
    const sections = document.querySelectorAll('.promise-section, .industries-section');
    
    sections.forEach(section => {
        const molecules = section.querySelectorAll('::before');
        // Add random animation delays for molecular patterns
        section.style.setProperty('--animation-delay', `${Math.random() * 5}s`);
    });
}

// Initialize molecular backgrounds
initMolecularBackground();