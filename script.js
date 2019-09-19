var hamburgerButton = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".nav");

function closeHamburgerMenu() {
    hamburgerMenu.classList.remove("active");
    hamburgerButton.classList.remove("is-active");
}

function openHamburgerMenu() {
    hamburgerMenu.classList.add("active");
    hamburgerButton.classList.add("is-active");
}

hamburgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    if(hamburgerMenu.classList.contains("active")) {
        closeHamburgerMenu();
    } else {
        openHamburgerMenu();
    }
});

hamburgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    if(e.target.classList.contains("nav__link")) {
        closeHamburgerMenu();
    }
});




