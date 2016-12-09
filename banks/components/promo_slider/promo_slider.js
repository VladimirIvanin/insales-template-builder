(function(){
  var promoSlider = new Swiper('.promo-slider', {
    pagination: '.promo-slider-pagination',
    nextButton: '.promo-slider-next',
    prevButton: '.promo-slider-prev',
    autoplay: 5000,
    loop: true,
    paginationClickable: true,
    autoHeight: true,
    breakpoints: {
      768: {
        autoplay: false,
      }
    }
  });
})();
