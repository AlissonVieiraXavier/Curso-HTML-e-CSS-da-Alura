const botao = document.getElementById("menubotton");
const menuNav = document.querySelector(".navbar");

botao.addEventListener("click", function () {
    menuNav.classList.toggle('navbar--ativo')

})


//carrosel

const imgs = document.getElementById("img-carrosel");
const img = document.querySelectorAll("#img-carrosel img")

var idx = 0;
function carrosel() {
    idx++;

    if (idx > imgs.length - 1) {
        idx = 0;
    }
    img.style.transform = 'translateX()'

}