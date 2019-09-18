var hamburgerButton = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".nav");

hamburgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    if(hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        hamburgerButton.classList.remove("is-active");
    } else {
        hamburgerMenu.classList.add("active");
        hamburgerButton.classList.add("is-active");
    }
});



const left = document.querySelector("#left");
const right = document.querySelector("#right");
const right = document.querySelector("#slider__content");
const computed = getComputedStyle(slider__content);

right.addEventListener("click", function (e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight < 3132) {
    slider__content.style.right = currentRight + 783 + "px";  
  }
});

left.addEventListener("click", function (e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);
  
    if (!currentRight) {
      currentRight = 0;
    }
  
    if (currentRight > 0) {
      slider__content.style.right = currentRight - 783 + "px";  
    }
});



const element = document.querySelector(".team__accordeon");

createAccordeon(element, {
    items: [
        {
          title: ".member__name",
          content: ".member__desk"
        },
        {
          title: ".member__name",
          content: ".member__desk"
        },
        {
           title: ".member__name",
           content: ".member__desk"
        },
        {
           title: ".member__name",
           content: ".member__desk"
        }
    ]
}); 

function createAccordeon(element, config) {
    let lastActive;

    element.classList.add(".team__accordeon");
    element.addEventListener("click", function (e) {
        if (e.target.classList.contains("member__name")){
           if (lastActive) {
               lastActive.classList.remove("active");
           }
           
           lastActive = e.target.parentNode;
           lastActive.classList.add("active");
        }
    });

    if (!config) {
        return;
    }

    for (let i = 0; i < config.items.length; i++) {
        const item = config.items[i];
        const itemElement = document.createElement("div");
        const titleElement = document.createElement("div");
        const contentElement = document.createElement("div");

        titleElement.classList.add("title");
        titleElement.textContent = item.title;
        contentElement.classList.add("content");
        contentElement.innerHTML = item.content;

        itemElement.appendChild(titleElement);
        itemElement.appendChild(contentElement);

        element.appendChild(itemElement);

    }
}



const element = document.querySelector(".menu__accordeon");

createAccordeon(element, {
    items: [
        {
          title: ".variant",
          content: ".variant__desk"
        },
        {
          title: ".variant",
          content: ".variant__desk"
        },
        {
           title: ".variant",
           content: ".variant__desk"
        },
        {
           title: ".variant",
           content: ".variant__desk"
        }
    ]
}); 

function createAccordeon(element, config) {
    let lastActive;

    element.classList.add(".menu__accordeon");
    element.addEventListener("click", function (e) {
        if (e.target.classList.contains("member__name")){
           if (lastActive) {
               lastActive.classList.remove("active");
           }
           
           lastActive = e.target.parentNode;
           lastActive.classList.add("active");
        }
    });

    if (!config) {
        return;
    }

    for (let i = 0; i < config.items.length; i++) {
        const item = config.items[i];
        const itemElement = document.createElement("div");
        const titleElement = document.createElement("div");
        const contentElement = document.createElement("div");

        titleElement.classList.add("title");
        titleElement.textContent = item.title;
        contentElement.classList.add("content");
        contentElement.innerHTML = item.content;

        itemElement.appendChild(titleElement);
        itemElement.appendChild(contentElement);

        element.appendChild(itemElement);

    }
}
