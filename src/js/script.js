//Scroll
const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const countPositionPercent = sectionEq => {
  return `${sectionEq * -100}%`;
};

const switchActiveClass = (elems, elemNdx) => {
  elems
    .eq(elemNdx)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const unBlockScroll = () => {
  setTimeout(() => {
    inscroll = false;
  }, 1300); // подождать пока завершится инерция на тачпадах
};

const performTransition = sectionEq => {
  if (inscroll) return;
  inscroll = true;

  const position = countPositionPercent(sectionEq);
  const switchFixedMenuClass = () =>
    switchActiveClass($(".fixed-menu__item"), sectionEq);

  switchActiveClass(sections, sectionEq);
  switchFixedMenuClass();

  display.css({
    transform: `translateY(${position})`
  });

  unBlockScroll();
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "next" : "prev";
    scrollViewport(direction);
  },
  keydown: e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

    if (userTypingInInputs) return;

    switch (e.keyCode) {
      case 40:
        scrollViewport("next");
        break;

      case 38:
        scrollViewport("prev");
        break;
    }
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  performTransition(parseInt($(e.currentTarget).attr("data-scroll-to")));
});

// разрешаем свайп на мобильниках
if (isMobile) {
  window.addEventListener(
    "touchmove",
    e => {
      e.preventDefault();
    }, {
      passive: false
    }
  );

  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirecrion;
      if (direction === "up") scrollDirecrion = "next";
      if (direction === "down") scrollDirecrion = "prev";
      scrollViewport(scrollDirecrion);
    }
  });
}


//Hamburgerbutton
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
  if (hamburgerMenu.classList.contains("active")) {
    closeHamburgerMenu();
  } else {
    openHamburgerMenu();
  }
});

hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains(".nav__link")) {
    closeHamburgerMenu();
  }
});


//Team__accordeon
let team__accordeon = document.querySelector("#team__accordeon");

team__accordeon.addEventListener("click", function (e) {
  e.preventDefault();
  let target = e.target;
  let currentTarget = target.nextElementSibling;

  function clear() {
    let activeContent = document.querySelector(".member__desk.active");
    if (activeContent) {
      activeContent.classList.remove("active");
    }
  }

  if (target.classList.contains("member__name")) {
    if (currentTarget.classList.contains("active")) {
      currentTarget.classList.remove("active");
    } else {
      clear();
      currentTarget.classList.add("active");
    }
  }
});


//Menu__accordeon
let menu__accordeon = document.querySelector("#menu__accordeon");

menu__accordeon.addEventListener("click", function (e) {
  e.preventDefault();
  let target = e.target;
  let linkTarget = target.parentElement;
  let nameTarget = target.parentElement.parentElement;
  console.log(nameTarget);

  function clear() {
    let activeContent = document.querySelector(".variant.active");
    if (activeContent) {
      activeContent.classList.remove("active");
    }
  }

  if (target.classList.contains("variant__type")) {
    if (linkTarget.classList.contains("active")) {
      linkTarget.classList.remove("active");
    } else {
      clear();
      linkTarget.classList.add("active");
    }
  }

  if (target.classList.contains("variant__name")) {
    if (nameTarget.classList.contains("active")) {
      nameTarget.classList.remove("active");
    } else {
      clear();
      nameTarget.classList.add("active");
    }
  }
});


//Reviews - overlay
const openButtons = document.querySelectorAll(".btn--gray");
//const reviewsSuccessOverlay = createOverlay("Подробнее");

for (let i = 0; i < openButtons.length; i++) {
  const openButton = openButtons[i];
  openButton.addEventListener("click", function (e) {
    var overlayText = e.target.previousElementSibling.innerHTML;
    const reviewsSuccessOverlay = createOverlay(overlayText);
    document.body.appendChild(reviewsSuccessOverlay);
  });

}

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".overlay__content");
  contentElement.innerHTML = content;

  return overlayElement;
}


//Slider
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider__list = document.querySelector(".slider__list");
let sliderItems = document.querySelectorAll(".slider__item");

var currentRight = 0;
var minRight = 0;
var step = 100;
var maxRight = (sliderItems.length - 1) * step;

slider__list.style.right = currentRight + "%";

right.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    slider__list.style.right = currentRight + "%";
  } else {
    currentRight = minRight;
    slider__list.style.right = currentRight + "%";
  }
});

left.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    slider__list.style.right = currentRight + "%";
  } else {
    currentRight = maxRight;
    slider__list.style.right = currentRight + "%";
  }
});


//Form - отправка
const myForm = document.querySelector("#form");
const form__btn = document.querySelector("#form__btn");

form__btn.addEventListener("click", function (event) {
  event.preventDefault();

  if (validateForm(myForm)) {
    let data = new FormData();
    data.append("name", myForm.elements.name.value);
    data.append("phone", myForm.elements.name.value);
    data.append("comment", myForm.elements.name.value);
    data.append("to", "mshar50055@gmail.com");
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(data);
    form__btn.disabled = true;
    xhr.addEventListener("load", () => {
      form__btn.disabled = false;
      if (xhr.response.status) {
        console.log(xhr);
        const reviewsSuccessOverlay = createOverlay(xhr.response.message);
        document.body.appendChild(reviewsSuccessOverlay);
      }
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "";
    return true;
  }
}

//Form - заказ отправлен
//const formOpenButton = document.querySelector("#form__btn");
//const successOverlay = createOverlay("Заказ отправлен");

//openButton.addEventListener("click", function() {
//document.body.appendChild(successOverlay);
//});

//function createOverlay(content) {
//const overlayElement = document.createElement("div");
//overlayElement.classList.add("overlay");

//const template = document.querySelector("#overlayTemplate");
//overlayElement.innerHTML = template.innerHTML;

//const closeElement = overlayElement.querySelector(".close");
//closeElement.addEventListener("click", function() {
//document.body.removeChild(overlayElement);
//});

//const contentElement = overlayElement.querySelector(".overlay__content");
//contentElement.innerHTML = content;

//return overlayElement;
//}


//Form - отправка не удалась
//const closeButton = document.querySelector("#form__btn");
//const unsuccessOverlay = createOverlay("Отправка не удалась");

//openButton.addEventListener("click", function() {
//document.body.appendChild(successOverlay);
//});

//function createOverlay(content) {
//const overlayElement = document.createElement("div");
//overlayElement.classList.add("overlay");

//const template = document.querySelector("#overlayTemplate");
//overlayElement.innerHTML = template.innerHTML;

//const closeElement = overlayElement.querySelector(".close");
//closeElement.addEventListener("click", function() {
//document.body.removeChild(overlayElement);
//});

//const contentElement = overlayElement.querySelector(".overlay__content");
//contentElement.innerHTML = content;

//return overlayElement;
//}