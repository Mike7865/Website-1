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
        slider__list.style.right = currentRight + "100%";
    } else {
        currentRight = minRight;
        slider__list.style.right = currentRight + "100%";
    }
});

left.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        slider__list.style.right = currentRight + "100%";
    } else {
        currentRight = maxRight;
        slider__list.style.right = currentRight + "100%";
    }
});



const form = document.querySelector("#form");
const form__btn = document.querySelector("#form__btn");

form__btn.addEventListener("click", function(event) {
    event.preventDefault();

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.name)) {
            valid = false;
        }

        if (!validateField(form.elements.phone)) {
            valid = false;
        }

        return valid;
    }
        

    if (validateForm(form)) {
        const data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
        xhr.send(JSON.stringify(data));
    }
});



const openButton = document.querySelector("#btn--gray");
const successOverlay = createOverlay("Подробнее");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".overlay__content");
  contentElement.innerHTML = content;

  return overlayElement;
}




const openButton = document.querySelector("#form__btn");
const successOverlay = createOverlay("Заказ отправлен");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".overlay__content");
  contentElement.innerHTML = content;

  return overlayElement;
}



const closeButton = document.querySelector("#form__btn");
const unsuccessOverlay = createOverlay("Отправка не удалась");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".overlay__content");
  contentElement.innerHTML = content;

  return overlayElement;
}

