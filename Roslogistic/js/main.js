const btnOpen = document.querySelector('.burger-menu__btn-open');
const btnClose = document.querySelector('.header-bg-menu__btn-close')
const bgMenu = document.querySelector('.header-bg-menu');

btnOpen.addEventListener('click', function () {
    bgMenu.classList.add('header-bg-menu_active')
});
btnClose.addEventListener('click', function () {
    bgMenu.classList.remove('header-bg-menu_active')
})