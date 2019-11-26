const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('.navbar');
    burger.addEventListener('click', () => {
        //Toggle Nav
        navBar.classList.toggle('navbar-fixed');
        nav.classList.toggle('nav-active');
        nav.style.animation = `navFade 250ms ease`


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle1');
        logo.classList.toggle('toggle2');
    });

}

navSlide();


// Get the scroll to top icon
const scrollToTop = document.querySelector('.scroll-to-top');

// Add eventListener to the scroll to top icon and when clicked scroll to top smoothly
scrollToTop.addEventListener('click', (e) => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
    // window.pageYOffset: 0;
});


const button = document.querySelector('.download-btn');

button.addEventListener('click', () => {
    button.value = "✓";
})