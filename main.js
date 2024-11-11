const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})


// Show Scroll Up

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}

// Change Background Header

const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if (this.scrollY >= 250) {
        header.classList.add("border-b","border-yellow-500")
    } else {
        header.classList.remove("border-b","border-yellow-500")
    }
}

window.addEventListener("scroll", scrollHeader)