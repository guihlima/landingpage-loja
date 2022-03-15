// Ativar input busca
var btnSearch = document.querySelector('#search-btn')
var inputSearch = document.querySelector('#input-search')

btnSearch.addEventListener('click', ()=>{
    inputSearch.classList.toggle('active')
})

// Ativar menu
var btnMenu = document.querySelector('#nav-bar')
var btnClose = document.querySelector('#menu-close')
var menu = document.querySelector('#menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})
btnClose.addEventListener('click', ()=>{
    menu.classList.remove('active')
})



// Ativação do Swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})
