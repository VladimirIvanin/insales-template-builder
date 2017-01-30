$(document).ready(function() {
  EventBus.subscribe('update_items:insales:cart', function (cart) {
    if (cart.items_count > 0) {
      $('[data-items-count]').html('('+ cart.items_count +')')
    }
  });
});

$(document).ready(function() {
  EventBus.subscribe('add_items:insales:cart', function (cart) {
    $.magnificPopup.open({
      items: {
        src: '#cart-add',
        type: 'inline'
      }
    });
  });
  $(document).on('click', '.added-close', function(event) {
    event.preventDefault();
    $.magnificPopup.close();
  });
});

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
