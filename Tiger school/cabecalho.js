const botao = document.getElementById("menubotton");
const menuNav = document.querySelector(".navbar");

botao.addEventListener("click", function () {
    menuNav.classList.toggle('navbar--ativo')

})


//carrosel

var imgs = document.getElementById("img-carrosel");
var img = document.querySelectorAll("#img-carrosel img")

var idx = 0;
function carrosel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;

}
setInterval(carrosel(), 1000);