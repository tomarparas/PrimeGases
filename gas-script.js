// Gas Subpages JavaScript
document.addEventListener('DOMContentLoaded', function() {
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

    // Enhanced animations based on page type
    const pageType = document.body.className;
    
    switch(pageType) {
        case 'oxygen-page':
            createOxygenBubbles();
            break;
        case 'nitrogen-page':
            createFrostParticles();
            break;
        case 'argon-page':
            createWeldingSparks();
            break;
        case 'co2-page':
            createCO2Bubbles();
            break;
        case 'nitrous-page':
            createCalmWaves();
            break;
        case 'hydrogen-page':
            createEnergyLines();
            break;
        case 'mixtures-page':
            createMolecularConnections();
            break;
    }

    // Oxygen page - floating bubbles
    function createOxygenBubbles() {
        const bubbleBg = document.querySelector('.bubble-bg');
        if (!bubbleBg) return;

        setInterval(() => {
            const bubble = document.createElement('div');
            bubble.style.cssText = `
                position: absolute;
                width: ${Math.random() * 40 + 20}px;
                height: ${Math.random() * 40 + 20}px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                bottom: -50px;
                animation: oxygenBubbleRise 8s ease-out forwards;
                pointer-events: none;
            `;
            
            bubbleBg.appendChild(bubble);
            
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 8000);
        }, 2000);
    }

    // Nitrogen page - frost particles
    function createFrostParticles() {
        const frostBg = document.querySelector('.frost-bg');
        if (!frostBg) return;

        setInterval(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: -10px;
                animation: frostFall 6s linear forwards;
                pointer-events: none;
            `;
            
            frostBg.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }, 300);
    }

    // Argon page - welding sparks
    function createWeldingSparks() {
        const sparksBg = document.querySelector('.sparks-bg');
        if (!sparksBg) return;

        setInterval(() => {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: #fbbf24;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: sparkFly 1s ease-out forwards;
                pointer-events: none;
                box-shadow: 0 0 10px #fbbf24;
            `;
            
            sparksBg.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 1000);
        }, 500);
    }

    // CO2 page - interactive bubbles
    function createCO2Bubbles() {
        const bubblesBg = document.querySelector('.bubbles-bg');
        if (!bubblesBg) return;

        setInterval(() => {
            const bubble = document.createElement('div');
            bubble.style.cssText = `
                position: absolute;
                width: ${Math.random() * 30 + 15}px;
                height: ${Math.random() * 30 + 15}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                bottom: -30px;
                animation: co2BubbleRise 5s ease-out forwards;
                pointer-events: none;
            `;
            
            bubblesBg.appendChild(bubble);
            
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 5000);
        }, 1000);
    }

    // Nitrous Oxide page - calm waves
    function createCalmWaves() {
        const wavesBg = document.querySelector('.waves-bg');
        if (!wavesBg) return;

        // Create pulsing circles for breathing effect
        setInterval(() => {
            const circle = document.createElement('div');
            circle.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: breathingCircle 4s ease-in-out forwards;
                pointer-events: none;
            `;
            
            wavesBg.appendChild(circle);
            
            setTimeout(() => {
                if (circle.parentNode) {
                    circle.parentNode.removeChild(circle);
                }
            }, 4000);
        }, 2000);
    }

    // Hydrogen page - energy lines
    function createEnergyLines() {
        const energyBg = document.querySelector('.energy-bg');
        if (!energyBg) return;

        setInterval(() => {
            const line = document.createElement('div');
            line.style.cssText = `
                position: absolute;
                width: 100px;
                height: 2px;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
                left: -100px;
                top: ${Math.random() * 100}%;
                animation: energyFlow 3s linear forwards;
                pointer-events: none;
            `;
            
            energyBg.appendChild(line);
            
            setTimeout(() => {
                if (line.parentNode) {
                    line.parentNode.removeChild(line);
                }
            }, 3000);
        }, 800);
    }

    // Gas Mixtures page - molecular connections
    function createMolecularConnections() {
        const moleculesBg = document.querySelector('.molecules-bg');
        if (!moleculesBg) return;

        setInterval(() => {
            // Create connecting molecules
            const molecule = document.createElement('div');
            molecule.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: moleculePulse 3s ease-in-out forwards;
                pointer-events: none;
            `;
            
            moleculesBg.appendChild(molecule);
            
            setTimeout(() => {
                if (molecule.parentNode) {
                    molecule.parentNode.removeChild(molecule);
                }
            }, 3000);
        }, 1500);
    }

    // Application cards hover effects
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.app-icon');
            icon.style.animation = 'none';
            setTimeout(() => {
                icon.style.animation = 'iconPulse 3s ease-in-out infinite, iconGlow 0.5s ease-out';
            }, 10);
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.app-icon');
            icon.style.animation = 'iconPulse 3s ease-in-out infinite';
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
            }
        });
    }, observerOptions);

    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('.content-section, .applications-section');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        scrollObserver.observe(element);
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes oxygenBubbleRise {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        @keyframes frostFall {
            to {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
        
        @keyframes sparkFly {
            to {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
        
        @keyframes co2BubbleRise {
            to {
                transform: translateY(-100vh) scale(1.5);
                opacity: 0;
            }
        }
        
        @keyframes breathingCircle {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
        
        @keyframes energyFlow {
            to {
                left: 100%;
                opacity: 0;
            }
        }
        
        @keyframes moleculePulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.5); opacity: 1; }
        }
        
        @keyframes iconGlow {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.5) drop-shadow(0 0 10px rgba(83, 184, 228, 0.5)); }
        }
    `;
    document.head.appendChild(style);

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
});