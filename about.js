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


// =========================
// tagline
// =========================

document.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".shape");
    
    // Calculate mouse position from center
    const mouseX = (e.clientX - window.innerWidth / 2) / 25;
    const mouseY = (e.clientY - window.innerHeight / 2) / 25;

    shapes.forEach((shape) => {
        const speed = shape.getAttribute("data-speed") || 2;
        // Apply 3D translation
        shape.style.transform = `translateX(${mouseX * speed}px) translateY(${mouseY * speed}px) translateZ(50px)`;
    });
});

// ===========================
// company overview
// ===========================

// Initialize AOS for scroll animations
AOS.init({
    once: true, // Animations will only happen once
    offset: 100, // Trigger animation earlier
});

// Initialize VanillaTilt for 3D effect on image
VanillaTilt.init(document.querySelectorAll(".image-container-new"), {
    max: 10, // Max tilt rotation in degrees
    speed: 400, // Speed of the tilt
    glare: true, // Add a glare effect
    "max-glare": 0.3, // Max glare opacity
});

// ========================
// core expertise
// ========================

AOS.init({
    duration: 1000,
    once: true,
});

// ========================
// mission vision
// ========================

AOS.init({
    duration: 1000,
    once: true,
});

// ========================
// static
// ========================

// --- AOS Initialization ---
AOS.init({
    duration: 1000,
    once: true,
    offset: 100, // Trigger animations a bit earlier
});

// --- Stats Counter Logic ---
const statsSection = document.querySelector('.stats-tech-cta-section');
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

const startCounterAnimation = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 100; // Adjust for smoother or faster count

        const update = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(update, 20); // Speed of counting
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
};

const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersStarted) {
        startCounterAnimation();
        countersStarted = true;
    }
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

counterObserver.observe(statsSection);


// --- Neural Network Background (Canvas JS) ---
const canvas = document.getElementById('neuralNetworkCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 100 }; // Interactive radius

canvas.width = window.innerWidth;
canvas.height = statsSection.offsetHeight; // Match height to the section

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        this.x += this.directionX;
        this.y += this.directionY;

        // Mouse interaction (attraction)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 10;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 10;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
        }

        this.draw();
    }
}

function initParticles() {
    particles = [];
    let numberOfParticles = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1; // particle size
        let x = Math.random() * ((innerWidth - size * 2) - (size * 2)) + (size * 2);
        let y = Math.random() * ((innerHeight - size * 2) - (size * 2)) + (size * 2);
        let directionX = (Math.random() * .4) - .2; // speed
        let directionY = (Math.random() * .4) - .2;
        let color = 'rgba(82, 182, 185, 0.7)'; // Tealish color
        particles.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                           ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
            if (distance < (canvas.width / 7) * (canvas.height / 7)) { // connection distance
                opacityValue = 1 - (distance / 20000); // fade out connections
                ctx.strokeStyle = `rgba(0, 132, 197, ${opacityValue})`; // Blueish lines
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight); // Clear frame
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
    connectParticles();
}

// Ensure canvas matches section height on load and resize
window.addEventListener('load', () => {
    canvas.height = statsSection.offsetHeight;
    initParticles();
    animateParticles();
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = statsSection.offsetHeight;
    initParticles();
});

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y + window.scrollY; // Adjust for scroll position
});
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});


// --- Magnetic CTA Button Logic ---
const magneticButton = document.getElementById('magneticCta');
const blobEffect = document.querySelector('.blob-effect');

magneticButton.addEventListener('mousemove', (e) => {
    const rect = magneticButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Magnetic effect
    const strength = 0.15; // How much it moves
    const moveX = (x - rect.width / 2) * strength;
    const moveY = (y - rect.height / 2) * strength;
    magneticButton.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Blob follows mouse
    blobEffect.style.left = `${x}px`;
    blobEffect.style.top = `${y}px`;
});

magneticButton.addEventListener('mouseleave', () => {
    magneticButton.style.transform = `translate(0, 0)`; // Reset button position
    // Reset blob position (center it again relative to button)
    const rect = magneticButton.getBoundingClientRect();
    blobEffect.style.left = `${rect.width / 2}px`;
    blobEffect.style.top = `${rect.height / 2}px`;
});