const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})
//Mudar a cor do <p class="cartão__info cartao__info--visualizacao">33 Visualizações</p> para azul
/* var pegaCor = document.querySelector(".cartao__info--visualizacao");
var mudaCor = pegaCor.textContent
console.log(mudaCor);
mudaCor.body.style.fontColor = "white"*/