// this is for navbar
window.addEventListener("scroll", (event) => {

    const navbar = document.querySelector("nav");

    if (this.scrollY >= 985) {
        navbar.classList.remove("bg-transparent", "navbar-light");
        navbar.classList.add("navbar-dark", "bg-dark");
    }
    else {
        navbar.classList.add("bg-transparent", "navbar-light");
        navbar.classList.remove("navbar-dark", "bg-dark");
    }
});


// this is for activie page in navbar
const home = document.querySelector(".home");
const contact = document.querySelector(".contact");
const meetings = document.querySelector(".meetings");
const apply = document.querySelector(".apply");

var last = home;

var Identifier= function(tag){
    console.log(tag);
    tag.target.classList.add("active");
    last.classList.remove("active");
    last=tag.target;
}


home.addEventListener("click",Identifier(home));

contact.addEventListener("click",Identifier(contact));

meetings.addEventListener("click",Identifier(meetings));

apply.addEventListener("click",Identifier(apply));

