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


document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Move Parallax Effect
    const hero = document.querySelector('.mx-hero');
    const orbs = document.querySelectorAll('.mx-hero__orb');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) / 25;
        const moveY = (clientY - centerY) / 25;

        orbs.forEach((orb, index) => {
            const factor = index === 0 ? 1 : -1.5;
            orb.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
    });

    // 2. Entrance Animation (Simplified GSAP-like logic)
    const elements = [
        '.mx-hero__badge',
        '.mx-hero__title',
        '.mx-hero__subtitle',
        '.mx-hero__cta'
    ];

    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 * index}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// SECTION 2- Values
document.addEventListener('DOMContentLoaded', () => {
    const valueSection = document.querySelector('.mx-values');
    const valueCards = document.querySelectorAll('.mx-value-card');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggered Animation
                valueCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, index * 200); // 200ms delay between cards
                });
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if(valueSection) {
        revealOnScroll.observe(valueSection);
    }
});

//SECTION 3- Roadmap
document.addEventListener('DOMContentLoaded', () => {
    const roadmapSection = document.querySelector('.mx-roadmap-path');
    const fillLine = document.querySelector('.mx-roadmap__fill-line');
    const nodes = document.querySelectorAll('.mx-roadmap__node');

    const roadmapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Animate Line Filling
                if (window.innerWidth > 992) {
                    fillLine.style.width = '100%';
                } else {
                    fillLine.style.height = '100%';
                }

                // 2. Sequential Node Activation
                nodes.forEach((node, index) => {
                    setTimeout(() => {
                        node.classList.add('active');
                    }, index * 400); // 400ms staggering
                });

                roadmapObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    roadmapObserver.observe(roadmapSection);
});

// SECTION 4- Job Openings

document.addEventListener('DOMContentLoaded', () => {
    const jobCards = document.querySelectorAll('.mx-job-card');
    const filterBtns = document.querySelectorAll('.mx-filter-btn');

    // 1. Initial Staggered Reveal
    const revealJobs = () => {
        jobCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    const jobsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            revealJobs();
            jobsObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.1 });

    const grid = document.querySelector('.mx-jobs__grid');
    if(grid) jobsObserver.observe(grid);

    // 2. Filter Functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            jobCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });
});