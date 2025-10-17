// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Floating bubbles animation
    function createFloatingBubbles() {
        const bubbleContainer = document.querySelector('.bubble-animation');
        if (!bubbleContainer) return;

        setInterval(() => {
            const bubble = document.createElement('div');
            bubble.className = 'dynamic-bubble';
            bubble.style.cssText = `
                position: absolute;
                width: ${Math.random() * 60 + 20}px;
                height: ${Math.random() * 60 + 20}px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                bottom: -50px;
                animation: dynamicBubbleFloat 8s ease-out forwards;
                pointer-events: none;
            `;
            
            bubbleContainer.appendChild(bubble);
            
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 8000);
        }, 2000);
    }

    // Form interactions and validation
    const form = document.querySelector('.contact-form');
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    // Add glow effect on focus
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
            
            // Add floating particles
            createInputParticles(this.parentElement);
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Create floating particles for input focus
    function createInputParticles(container) {
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.className = 'input-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #2563eb;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: inputParticleFloat 1s ease-out forwards;
                pointer-events: none;
            `;
            
            container.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }
    }

    // Form submission with ripple effect
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-submit');
            
            // Create success ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'success-ripple';
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: rgba(16, 185, 129, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: successRipple 1s ease-out forwards;
            `;
            
            submitBtn.appendChild(ripple);
            
            // Simulate form processing
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    submitBtn.textContent = 'Request Callback';
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    ripple.remove();
                }, 2000);
            }, 1500);
        });
    }

    // Map pin animations
    const mapPins = document.querySelectorAll('.map-pin');
    mapPins.forEach((pin, index) => {
        pin.addEventListener('click', function() {
            // Remove active class from all pins
            mapPins.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked pin
            this.classList.add('active');
            
            // Create expanding circle effect
            const expandCircle = document.createElement('div');
            expandCircle.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border: 2px solid #10b981;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: pinExpand 1s ease-out forwards;
                pointer-events: none;
            `;
            
            this.appendChild(expandCircle);
            
            setTimeout(() => {
                expandCircle.remove();
            }, 1000);
        });
    });

    // Commitment cards hover effects
    const commitmentCards = document.querySelectorAll('.commitment-card');
    commitmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create floating icons
            const icon = this.querySelector('.card-icon');
            const iconClone = icon.cloneNode(true);
            
            iconClone.style.cssText = `
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 1.5rem;
                opacity: 0.3;
                animation: floatingIcon 2s ease-out forwards;
                pointer-events: none;
            `;
            
            this.appendChild(iconClone);
            
            setTimeout(() => {
                iconClone.remove();
            }, 2000);
        });
    });

    // Contact options hover effects
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.option-icon');
            
            // Create pulsing effect
            icon.style.animation = 'none';
            setTimeout(() => {
                icon.style.animation = 'pulse 2s infinite, optionGlow 0.5s ease-out';
            }, 10);
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.option-icon');
            icon.style.animation = 'pulse 2s infinite';
        });
    });

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
                
                // Add stagger effect for grids
                if (entry.target.classList.contains('commitment-grid') || 
                    entry.target.classList.contains('options-grid')) {
                    const cards = entry.target.querySelectorAll('.commitment-card, .option-card');
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
        '.commitment-grid, .options-grid, .coverage-item, .detail-item, .stat-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(element);
    });

    // Initialize commitment and option cards for stagger animation
    const cards = document.querySelectorAll('.commitment-card, .option-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
    document.querySelectorAll('button, .btn-primary, .btn-secondary, .btn-cta, .btn-cta-secondary').forEach(btn => {
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

    // Safety stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseFloat(finalValue);
                
                if (!isNaN(numericValue)) {
                    animateCounter(target, 0, numericValue, finalValue);
                }
            }
        });
    }, observerOptions);

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

    // Initialize floating bubbles
    createFloatingBubbles();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dynamicBubbleFloat {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        @keyframes inputParticleFloat {
            to {
                transform: translateY(-30px);
                opacity: 0;
            }
        }
        
        @keyframes successRipple {
            to {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
        
        @keyframes pinExpand {
            to {
                width: 60px;
                height: 60px;
                opacity: 0;
            }
        }
        
        @keyframes floatingIcon {
            to {
                transform: translateY(-50px);
                opacity: 0;
            }
        }
        
        @keyframes optionGlow {
            0% { box-shadow: 0 0 0 rgba(37, 99, 235, 0.5); }
            100% { box-shadow: 0 0 30px rgba(37, 99, 235, 0.8); }
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .form-group {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for molecular pattern
    window.addEventListener('scroll', function() {
        const molecularPattern = document.querySelector('.molecular-pattern');
        if (molecularPattern) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            molecularPattern.style.transform = `translateY(${rate}px)`;
        }
    });

    // Auto-resize textarea
    const textarea = document.querySelector('#message');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
});

// Phone number formatting
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    input.value = formattedValue;
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Form validation on submit
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
});