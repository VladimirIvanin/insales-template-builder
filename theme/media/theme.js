$(document).ready(function() {
  var indexSliders = new Swiper('.js-products-slider', {
    slidesPerView: 4,
    setWrapperSize: true,
    paginationClickable: true,
    loop: true,
    preventClicks: false,
    controlBy: 'container',
    nextButton: '.products-control-next',
    prevButton: '.products-control-prev',
    spaceBetween: 20
  });
});

$(document).ready(function() {
  var promoSlider = new Swiper('.js-promo', {
    pagination: '.promo-slider-pagination',
    nextButton: '.promo-slider-next',
    prevButton: '.promo-slider-prev',
    loop: true,
    paginationClickable: true,
    autoHeight: true
  });
});
