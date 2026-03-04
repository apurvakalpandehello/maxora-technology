// News Ticker Animation Control
const tickerContent = document.querySelector('.ticker-content');

if (tickerContent) {
    // Mouse hover kelyavar thambvane
    tickerContent.addEventListener('mouseenter', () => {
        tickerContent.style.animationPlayState = 'paused';
    });

    // Mouse kadhlyavar parat suru karne
    tickerContent.addEventListener('mouseleave', () => {
        tickerContent.style.animationPlayState = 'running';
    });
}

// navbar

const hamburger = document.querySelector(".hamburger"); // id ऐवजी class वापरला तरी चालेल
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// लिंकवर क्लिक केल्यावर मेनू बंद होण्यासाठी
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// ======================
// footer
// ======================

// Footer Newsletter Logic
const newsletterForm = document.getElementById('footer-newsletter');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input').value;
        
        // Animated response (alert cha badli tumhi custom modal vapru shakta)
        alert(`🚀 Excellence! We've sent a confirmation to: ${emailInput}`);
        this.reset();
    });
}

// =======================
// Banner
// =======================

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Mouse Position Tracking
let mouse = {
    x: null,
    y: null,
    radius: 150 // माऊस भोवती किती अंतरापर्यंत पार्टिकल्स जोडले जावेत
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // Draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#38bdf8';
        ctx.fill();
    }
    // Update particle movement
    update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        let color = '#38bdf8';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Connect particles with lines
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = `rgba(56, 189, 248, ${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

init();
animate();

// ====================
// About
// ====================

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

// ======================
// services
// ======================

// 'scrollReveal' हे नाव जास्त स्पष्ट (clear) आहे
const scrollReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // जेव्हा एलिमेंट स्क्रीनवर दिसेल (Intersecting)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // एकदा ॲनिमेशन झाले की ऑब्झर्व्ह करणे थांबवा (Performance साठी चांगले)
            scrollReveal.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.15 // १५% सेक्शन दिसल्यावर ॲनिमेशन सुरू होईल
});

// सर्व 'animate-on-scroll' क्लास असलेल्या एलिमेंट्सना ऑब्झर्व्ह करा
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => scrollReveal.observe(el));

// ==========================
// how we work
// ==========================

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.hologram-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "scale(1)";
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        observer.observe(card);
    });
});

// =======================
// working process
// =======================

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.orb-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "scale(1)";
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    steps.forEach(step => {
        step.style.opacity = "0";
        step.style.transform = "scale(0.8)";
        step.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        observer.observe(step);
    });
});

// ==========================
// technologies used
// ==========================

document.addEventListener('DOMContentLoaded', () => {
    const techTiles = document.querySelectorAll('.tech-tile');
    
    const revealTile = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100); // Staggered animation
            }
        });
    };

    const observer = new IntersectionObserver(revealTile, { threshold: 0.2 });

    techTiles.forEach(tile => {
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(30px) scale(0.9)';
        tile.style.transition = 'all 0.6s ease-out';
        observer.observe(tile);
    });
});

// ========================
// achievement
// ========================

const executeStatsCounter = () => {
    const allStatElements = document.querySelectorAll('.counter-display');
    
    allStatElements.forEach(singleCounter => {
        const finalTargetValue = +singleCounter.getAttribute('data-target');
        let currentIteratedValue = 0;
        const animationSpeedFactor = finalTargetValue / 100;

        const performUpdateStep = () => {
            currentIteratedValue += animationSpeedFactor;
            if (currentIteratedValue < finalTargetValue) {
                singleCounter.innerText = Math.ceil(currentIteratedValue);
                requestAnimationFrame(performUpdateStep);
            } else {
                singleCounter.innerText = finalTargetValue;
            }
        };
        performUpdateStep();
    });
};

const achievementSectionTarget = document.querySelector('.premium-impact-section');
const intersectionManager = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        executeStatsCounter();
        intersectionManager.unobserve(achievementSectionTarget);
    }
}, { threshold: 0.5 });

intersectionManager.observe(achievementSectionTarget);

// =========================
// testimonial
// =========================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default mobile sathi
    spaceBetween: 25,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // Desktop ani Tablet sathi settings
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4, // 1 Row madhe 4 Cards
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 3D Tilt Effect
VanillaTilt.init(document.querySelectorAll(".testimonial-card"), {
    max: 10,
    speed: 500,
    glare: true,
    "max-glare": 0.1,
});
