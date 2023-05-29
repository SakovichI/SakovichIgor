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




const sortBtn = document.querySelector(".sort__btn");
const sortMenu = document.querySelector(".sort__menu")
sortBtn.addEventListener('click', function () {
  sortMenu.classList.toggle('sort__menu_active')
});

/* Фильтр мобилка */

const filterBtn = document.querySelector(".filter__btn");
const filter = document.querySelector(".filter");
const filterBtnClose = document.querySelector('.filter__btn-close');
const filterHead = document.querySelector('.filter__head');

filterBtn.addEventListener('click', function () {
  filter.classList.add('filter_active');
})

filterBtnClose.addEventListener('click', function () {
  filter.classList.remove('filter_active')
  filterHead.classList.remove('filter__head_active');

})