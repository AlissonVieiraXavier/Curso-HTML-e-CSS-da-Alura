var botaoMenu = document.querySelector(".cabecalho-menu")
var menuNav = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", () => {
    menuNav.classList.toggle("active");
    //menuNav.style.display = "none"

})