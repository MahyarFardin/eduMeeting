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
