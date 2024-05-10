const menu = document.querySelector("#menu")
const closeBar = document.querySelector("#closeBar")
const responsiveNav = document.querySelector(".responsiveNav")


if (window.innerWidth > 1200) {
    responsiveNav.style.display = "none";
    menu.style.display = "none";
    closeBar.style.display = "none"
}

function showresponsiveNav() {
    const responsiveNav = document.querySelector(" .responsiveNav");
    responsiveNav.style.display = "block";
    menu.style.display = "none";
    closeBar.style.display = "block"
    
}

function hideresponsiveNav() {
    responsiveNav.style.display = "none"
    menu.style.display = "block"
    closeBar.style.display = "none"

}

