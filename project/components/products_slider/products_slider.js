$(document).ready(function() {
  $('.js-products-slider').each(function(index, el) {
    initProductInSlider($(el), index);
  });
});

var productSliders = {};

function initProductInSlider(el, key) {
  var sliderLength = el.find('.swiper-slide').length;
  var showSlider = sliderLength > 0;
  var isLoop = sliderLength > 4;
  var selector = el.data('slider-mod')

  if (!showSlider) {
    el.parents('.products:first').hide();
    return;
  }

  productSliders[key] = new Swiper(selector, {
    slidesPerView: 4,
    setWrapperSize: true,
    paginationClickable: true,
    loop: isLoop,
    preventClicks: false,
    controlBy: 'container',
    nextButton: '.products-control-next',
    prevButton: '.products-control-prev',
    spaceBetween: 20
  });
}
