const navMenu = document.getElementById("nav-menu");
const navLink = document.getElementById("nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})
