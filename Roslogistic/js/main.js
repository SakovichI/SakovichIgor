const btnOpen = document.querySelector('.burger-menu__btn-open');
const bgMenu = document.querySelector('.header-bg-menu');

btnOpen.addEventListener('click', function () {
    bgMenu.classList.add('header-bg-menu_active')
})