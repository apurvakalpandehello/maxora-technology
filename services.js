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


// =========================
// services
// =========================

// Initialize AOS
AOS.init();

function activateServer() {
    const container = document.getElementById('data-particles');
    
    // Create multiple particles on hover
    for(let i=0; i<5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'data-particle';
            
            // Random position on the server top
            const x = Math.random() * 180;
            const y = Math.random() * 180;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            container.appendChild(particle);
            
            // Cleanup
            setTimeout(() => particle.remove(), 2000);
        }, i * 150);
    }
}



const stack = document.getElementById('stackContainer');
const orb = document.getElementById('glowOrb');

document.addEventListener('mousemove', (e) => {
    // 1. Move Background Glow with Mouse
    const x = e.clientX;
    const y = e.clientY;
    orb.style.left = `${x - 250}px`;
    orb.style.top = `${y - 250}px`;

    // 2. Interactive Tilt for Stack
    // Calculates rotation based on mouse position relative to center
    const rotateY = (window.innerWidth / 2 - e.clientX) / 20;
    const rotateX = (window.innerHeight / 2 - e.clientY) / 20;

    // We keep the base 50deg and -25deg but add the tilt
    stack.style.transform = `rotateX(${50 + rotateX}deg) rotateZ(${-25 + rotateY}deg)`;
});

// Reset tilt when mouse leaves window
document.addEventListener('mouseleave', () => {
    stack.style.transform = `rotateX(50deg) rotateZ(-25deg)`;
});



const cloudSection = document.getElementById('cloudSection');
const hub = document.getElementById('cloudHub');
const encryptionCard = document.getElementById('encryptionCard');

cloudSection.addEventListener('mousemove', (e) => {
    // 3D Tilt Effect for Visual Box
    let xAxis = (window.innerWidth / 2 - e.clientX) / 25;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 25;
    
    hub.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-20px)`;
    
    // Security Icon Change on Hover
    encryptionCard.addEventListener('mouseenter', () => {
        document.getElementById('securityIcon').className = "fas fa-unlock-alt";
        document.getElementById('securityIcon').style.color = "#00ff88";
    });
    
    encryptionCard.addEventListener('mouseleave', () => {
        document.getElementById('securityIcon').className = "fas fa-lock";
        document.getElementById('securityIcon').style.color = "white";
    });
});




// Updated IDs: techVisualSection, activeCube
const section = document.getElementById('techVisualSection');
const cube = document.getElementById('activeCube');

section.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.clientX) / 20;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 20;
    cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    cube.style.animation = "none";
});

section.addEventListener('mouseleave', () => {
    cube.style.transform = "rotateY(0deg) rotateX(0deg)";
    cube.style.animation = "autoRotate 25s infinite linear";
});

// Updated ID: background-particles
const canvas = document.getElementById('background-particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = Math.random() > 0.5 ? '#00f2fe' : '#ff0055';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.3) {
            particles.splice(i, 1);
            i--;
            particles.push(new Particle());
        }
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

init();
animate();




const phoneFrame = document.getElementById('phoneFrame');
const btnAndroid = document.getElementById('btnAndroid');
const btnIphone = document.getElementById('btnIphone');
const cameraStyle = document.getElementById('cameraStyle');
const screenDisplay = document.getElementById('screenDisplay');

// Android Design
btnAndroid.addEventListener('click', () => {
    btnAndroid.classList.add('active');
    btnIphone.classList.remove('active');
    
    phoneFrame.style.borderRadius = "15px"; // Square corners
    phoneFrame.style.borderWidth = "8px";
    cameraStyle.style.width = "40px";
    cameraStyle.style.borderRadius = "0 0 5px 5px";
    // Android App theme color
    screenDisplay.style.borderColor = "#333";
});

// iPhone Design
btnIphone.addEventListener('click', () => {
    btnIphone.classList.add('active');
    btnAndroid.classList.remove('active');
    
    phoneFrame.style.borderRadius = "35px"; // Rounded corners
    phoneFrame.style.borderWidth = "6px";
    cameraStyle.style.width = "80px";
    cameraStyle.style.borderRadius = "0 0 15px 15px";
    // iPhone App theme color
    screenDisplay.style.borderColor = "#111";
});




// 1. Background Particle Animation
const backgroundCanvas = document.getElementById('particleBackground');
const canvasContext = backgroundCanvas.getContext('2d');

backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

let activeParticles = [];
const particleLimit = 100;
const particleColor = 'rgba(0, 210, 255, 0.3)';
const lineColor = 'rgba(0, 210, 255, 0.1)';
const connectionDistance = 100; // Max distance for lines between particles

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    updatePosition() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around if particle goes off screen
        if (this.x > backgroundCanvas.width) this.x = 0;
        if (this.x < 0) this.x = backgroundCanvas.width;
        if (this.y > backgroundCanvas.height) this.y = 0;
        if (this.y < 0) this.y = backgroundCanvas.height;
    }

    render() {
        canvasContext.fillStyle = particleColor;
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        canvasContext.fill();
    }
}

function initializeParticles() {
    activeParticles = [];
    for (let i = 0; i < particleLimit; i++) {
        const x = Math.random() * backgroundCanvas.width;
        const y = Math.random() * backgroundCanvas.height;
        const size = Math.random() * 2 + 1;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        activeParticles.push(new Particle(x, y, size, speedX, speedY));
    }
}

function drawParticleConnections() {
    for (let a = 0; a < activeParticles.length; a++) {
        for (let b = a; b < activeParticles.length; b++) {
            const distance = ((activeParticles[a].x - activeParticles[b].x) ** 2 + (activeParticles[a].y - activeParticles[b].y) ** 2) ** 0.5;
            if (distance < connectionDistance) {
                canvasContext.strokeStyle = lineColor;
                canvasContext.lineWidth = 0.5;
                canvasContext.beginPath();
                canvasContext.moveTo(activeParticles[a].x, activeParticles[a].y);
                canvasContext.lineTo(activeParticles[b].x, activeParticles[b].y);
                canvasContext.stroke();
            }
        }
    }
}

function animateParticles() {
    canvasContext.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    for (let i = 0; i < activeParticles.length; i++) {
        activeParticles[i].updatePosition();
        activeParticles[i].render();
    }
    drawParticleConnections();
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = window.innerHeight;
    initializeParticles(); // Re-initialize particles on resize
});

initializeParticles();
animateParticles();

// 2. Network Hub Mouse Interaction & Dynamic Lines
const hubContainer = document.getElementById('mainHub');
const sectionContainer = document.getElementById('whyChooseUsSection');
const centralHub = hubContainer.querySelector('.hub-circle');
const clientItems = document.querySelectorAll('.client-box');
const svgLineContainer = document.getElementById('linesSvg');

// Initial positions of hub and client boxes
let hubCoordinates = {};
let clientCoordinates = [];

function refreshElementPositions() {
    const hubRect = centralHub.getBoundingClientRect();
    const sectionRect = sectionContainer.getBoundingClientRect();
    
    hubCoordinates = {
        x: hubRect.left + hubRect.width / 2 - sectionRect.left,
        y: hubRect.top + hubRect.height / 2 - sectionRect.top
    };

    clientCoordinates = Array.from(clientItems).map(box => {
        const boxRect = box.getBoundingClientRect();
        return {
            x: boxRect.left + boxRect.width / 2 - sectionRect.left,
            y: boxRect.top + boxRect.height / 2 - sectionRect.top
        };
    });
}

function renderConnectingLines() {
    svgLineContainer.innerHTML = ''; // Clear previous lines
    clientCoordinates.forEach(pos => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', hubCoordinates.x);
        line.setAttribute('y1', hubCoordinates.y);
        line.setAttribute('x2', pos.x);
        line.setAttribute('y2', pos.y);
        line.classList.add('animated-line');
        svgLineContainer.appendChild(line);
    });
}

// Mouse move for 3D tilt on hubContainer
sectionContainer.addEventListener('mousemove', (e) => {
    const rect = sectionContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotationX = (mouseY - midY) / 50; // Invert for natural feel
    const rotationY = (mouseX - midX) / 50;

    hubContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

sectionContainer.addEventListener('mouseleave', () => {
    hubContainer.style.transform = `rotateX(15deg) rotateY(-15deg)`; // Reset to initial tilt
});


// Initial draw and update on resize
window.addEventListener('load', () => {
    refreshElementPositions();
    renderConnectingLines();
});

window.addEventListener('resize', () => {
    refreshElementPositions();
    renderConnectingLines();
});

// Observe changes in client box positions to redraw lines if they move due to animations
const clientObserver = new MutationObserver(() => {
    refreshElementPositions();
    renderConnectingLines();
});
clientItems.forEach(box => clientObserver.observe(box, { attributes: true, childList: true, subtree: true }));


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