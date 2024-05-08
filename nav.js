const menu = document.querySelector("#menu")
const closeBar = document.querySelector("#closeBar")

function showresponsiveNav() {
    const responsiveNav = document.querySelector(" .responsiveNav");
    responsiveNav.style.display = "block";
    menu.style.display = "none";
    closeBar.style.display = "block"
    
}

function hideresponsiveNav() {
    const responsiveNav = document.querySelector(".responsiveNav")
    responsiveNav.style.display = "none"
    menu.style.display = "block"
    closeBar.style.display = "none"

}