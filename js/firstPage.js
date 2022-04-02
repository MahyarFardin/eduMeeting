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

var before="nav-link.active.home";

for (let index = 0; index < document.querySelectorAll("nav li a").length; index++) {
    document.querySelectorAll("nav li a")[index].addEventListener("click",(event)=>{
        var dir=event.target.className;
        document.querySelector("."+dir.slice(9, dir.length-1)).classList.add(".active");
        document.querySelector(before).classList.remove(".active");
        before=event.target.className;
    })    
}
