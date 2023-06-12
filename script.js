const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

// when someone clicks on the hamburger menu(the image), this function will be called 

menuHamburger.addEventListener('click',()=>
{
navLinks.classList.toggle('mobile-menu')
})