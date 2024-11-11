// Hamburger Menu Toggle
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
    hamburger.classList.toggle("ri-close-large-line");
});

// Close menu when a nav link is clicked
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        hamburger.classList.remove("ri-close-large-line");
    });
});

// Scroll Up Button Visibility
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

// Change Header Background on Scroll
const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (window.scrollY >= 250) {
        header.classList.add("border-b", "border-yellow-500");
    } else {
        header.classList.remove("border-b", "border-yellow-500");
    }
};

window.addEventListener("scroll", scrollHeader);

// Activate Navigation Link Based on Scroll Position
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);
window.addEventListener("load", activeLink);

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 30,
    reset: true
});

// Reveal multiple elements at once for cleaner code
sr.reveal(".home_data, .about_top, .popular_top, .review_top, .review_swiper, .footer_icon, .footer_content, footer_floral, .copyright");
sr.reveal(".service_card, .popular_card", { interval: 100 });
sr.reveal(".about_leaf", { delay: 1000, origin: "right" });
sr.reveal(".review_leaf, .footer_floral", { delay: 1000, origin: "left" });

// Individual animations
sr.reveal(".home_image", { delay: 500, scale: 0.5 });
sr.reveal(".about_card_1-img, .about_card_2-content", { origin: "left" });
sr.reveal(".about_card_2-img, .about_card_1-content", { origin: "right" });
