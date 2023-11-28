// Variables
let body = document.querySelector("body")
let menu = document.querySelector(".menu")

let ul = document.querySelector(".navbar-nav")
let nav = document.querySelector(".nav-container")
let card = document.createElement("div")


menu.addEventListener('click', () => {
    menu.classList.toggle("open")
    if (menu.classList.contains("open")) {
        body.style.overflowY = "hidden";
        card.classList.add("add")
        nav.appendChild(card)
        card.appendChild(ul)
    }
    else {
        body.style.overflowY = "scroll";
        nav.appendChild(ul)
        card.remove()
    }
})

/*==================================scroll-revea=====================================*/

function scrollReveal() {
    var revealPoint = 150;
    var revealElement = document.querySelectorAll(".section-show");
    for (var i = 0; i < revealElement.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = revealElement[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            revealElement[i].classList.add("active");
        } else {
            revealElement[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", scrollReveal);

/*==================================Scroll to top=====================================*/

let arrow = document.querySelector(".up");

window.onscroll = function () {
    console.log(this.scrollY);
    this.scrollY >= 1000 ? arrow.classList.add("show") : arrow.classList.remove("show");
};

arrow.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};
