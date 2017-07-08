$(document).ready(function() {
  $('.js-products-slider').each(function(index, el) {
    initProductInSlider($(el));
  });
});

var productSliders = {};

function initProductInSlider(el) {
  var sliderLength = el.find('.swiper-slide').length;
  var showSlider = sliderLength > 0;
  var isLoop = sliderLength > 4;
  var selector = el.data('slider-mod')

  if (!showSlider) {
    el.parents('.products:first').hide();
    return;
  }

  productSliders[generateUUID()] = new Swiper(selector, {
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

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
