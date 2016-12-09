 /*
 * News feed
 * Инициализация слайдера новостей
 **/
(function(){
  var newsFeed = new Swiper('.news-feed', {
    pagination: '.news-slider-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    uniqueNavElements: true,
    slidesPerView: 4,
    simulateTouch: false,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });
})();
