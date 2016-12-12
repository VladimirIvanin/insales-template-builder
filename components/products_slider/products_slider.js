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
