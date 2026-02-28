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