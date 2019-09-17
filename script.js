var hamburgerButton = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".nav");

hamburgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    if(hamburgerMenu.classList.contains("archive")) {
        hamburgerMenu.classList.remove("active");
        hamburgerButton.classList.remove("is-active");
    } else {
        hamburgerMenu.classList.add("active");
        hamburgerButton.classList.add("is-active");
    }
});

const element = document.querySelector(".team__accordeon");

createAccordeon(element, {
    items: [
        {

        },
        {

        },
        {

        }
    ]
}); 

function createAccordeon(element, config) {
    let lastActive;

    element.classList.add(".team__accordeon");
    element.addEventListener("click", function (e) {
        if (e.target.classList.contains("member__name")){
            
        }
    })
}