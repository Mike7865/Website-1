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



let team__accordeon = document.querySelector("#team__accordeon");

team__accordeon.addEventListener("click", function (e) {
    e.preventDefault();
    let target = e.target;
    let currentTarget = target.nextElementSibling;

    function clear() {
        let activeContent = document.querySelector(".member__desk.active");
        if (activeContent) {
            activeContent.classList.remove("active");
        }
    }

    if (target.classList.contains("member__name")) {
        if (currentTarget.classList.contains("active")) {
            currentTarget.classList.remove("active");
        } else {
            clear(); 
            currentTarget.classList.add("active");
        }
    }
});



let menu__accordeon = document.querySelector("#menu__accordeon");

menu__accordeon.addEventListener("click", function (e) {
    e.preventDefault();
    let target = e.target;
    let currentTarget = target.nextElementSibling;

    function clear() {
        let activeContent = document.querySelector(".variant__desk.active");
        if (activeContent) {
            activeContent.classList.remove("active");
        }
    }

    if (target.classList.contains("variant__type")) {
        if (currentTarget.classList.contains("active")) {
            currentTarget.classList.remove("active");
        } else {
            clear(); 
            currentTarget.classList.add("active");
        }
    }
});



const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider__list = document.querySelector("#slider__list");

slider__list.style.right = currentRight + "px";

right.addEventListener("click", function() {
    if (currentRight < maxRight) {
        currentRight += step;
        slider__list.style.right = currentRight + "941px";
    } else {
        currentRight = minRight;
        slider__list.style.right = currentRight + "941px";
    }
});

left.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        slider__list.style.right = currentRight + "941px";
    } else {
        currentRight = maxRight;
        slider__list.style.right = currentRight + "941px";
    }
});


