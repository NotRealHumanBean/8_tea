//@prepros-append ibg.js
//@prepros-append burger.js
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


const burgerBtn = document.querySelector(".burger-button");
const closeBtn = document.querySelector(".burger__close-btn");
const burgerMenu = document.querySelector(".burger");
const bgBlock = document.querySelector(".menu-close");

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger-open');
    bgBlock.classList.add('menu-open')
});
closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-open')
    bgBlock.classList.remove('menu-open')
});
