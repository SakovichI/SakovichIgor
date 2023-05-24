$("#slider-range")
  .slider({
    range: true,
    min: 1000,
    max: 200000,
    values: [50000, 102000],
    slide: function (event, ui) {
      $("#amount1").val(ui.values[0] + " ₽");
      $("#amount2").val(ui.values[1] + " ₽");
    }
  });

$("#amount1").val($("#slider-range ").slider("values", 0) + " ₽");
$("#amount2").val($("#slider-range ").slider("values", 1) + " ₽");



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const sortBtn = document.querySelector(".sort__btn");
const sortMenu = document.querySelector(".sort__menu")
sortBtn.addEventListener('click', function () {
  sortMenu.classList.toggle('sort__menu_active')
});
