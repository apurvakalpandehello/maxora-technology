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
// portfolio
// =========================

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                // Apply hidden class to trigger CSS transition
                card.classList.add('hidden');

                // After transition finishes, show/hide cards
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                    }
                }, 500); // Match this with CSS transition time
            });
        });
    });
});


// ========================
// our projects
// ========================

// Vanilla Tilt effect to make cards 3D on hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left; // mouse position inside card
        let y = e.clientY - rect.top;
        
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;
        
        // Calculate rotation based on mouse position
        let rotateX = -(y - centerY) / 10; 
        let rotateY = (x - centerX) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    // Reset card position when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});


// =========================
// Tech Stack & Tools
// =========================


// Vanilla Tilt effect on icons
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mousemove', (e) => {
        let rect = icon.getBoundingClientRect();
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top;
        
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;
        
        let rotateX = -(y - centerY) / 5; 
        let rotateY = (x - centerX) / 5;

        icon.style.transform += ` perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    icon.addEventListener('mouseleave', () => {
        // Reset only tilt, maintain position
        icon.style.transform = icon.style.transform.split('perspective')[0];
    });
});


// =============================
// Measurable Impact & Solutions
// ============================= 

// 1. Data Counter (Runs when visible)
const counters = document.querySelectorAll('.counter');
let counted = false;

const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target > 10 ? 50 : 200; // Adjust speed

        const updateCount = setInterval(() => {
            count += Math.ceil(target / 50);
            if (count >= target) {
                counter.innerText = target;
                clearInterval(updateCount);
            } else {
                counter.innerText = count;
            }
        }, 30);
    });
};

// Trigger counters on scroll
window.addEventListener('scroll', () => {
    const section = document.querySelector('.key-results-section');
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight && !counted) {
        startCounters();
        counted = true;
    }
});

// 2. 3D Accordion Functionality
const headers = document.querySelectorAll('.accordion-header-3d');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;
        const icon = header.querySelector('span');

        // Close other items
        document.querySelectorAll('.accordion-item-3d').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.accordion-content-3d').style.maxHeight = null;
                i.querySelector('.accordion-header-3d span').innerText = "+";
            }
        });

        // Toggle current item
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.innerText = "-";
        } else {
            content.style.maxHeight = null;
            icon.innerText = "+";
        }
    });
});


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