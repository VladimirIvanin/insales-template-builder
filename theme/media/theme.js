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
      callbacks: {
        beforeOpen: function() {
          this.st.mainClass = 'mfp-zoom-in';
        }
      },
      removalDelay: 500, //delay removal by X to allow out-animation
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

  $(document).on('click', '.js-modal', function(event) {
    event.preventDefault();
    var _effect = $(this).data('effect') || 'mfp-zoom-in';

    $.magnificPopup.open({
      callbacks: {
        beforeOpen: function() {
          this.st.mainClass = _effect;
        }
      },
      removalDelay: 500, //delay removal by X to allow out-animation
      items: {
        src: $(this).attr('href'), // can be a HTML string, jQuery object, or CSS selector
        type: 'inline'
      }
    });
  });

  $('[name="phone"]').inputmask("+7(999) 999 9999");

  $('.js-feedback').InSalesFeedback({
    require: ['phone'],
    useAgree: true,
    showMessageAgree: true,
    onError: function(data) {
      // Ошибка валидации
      console.log(data);
    },
    onSuccess: function(data) {
      // сообщение успешно отправлено
      setTimeout(function () {
        $.magnificPopup.close();
      }, 5000)
    },
    onFail: function(data) {
      // Ошибка при отправке сообщения
      console.log(data);
    }
  });

});

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

$(document).ready(function() {

  var activeTab = 1;

  if (window.location.href.indexOf( '#review_form' ) > -1) {
    activeTab = $('[data-tab-anchor="review"]').index() + 1;
  }

  $('.js-product_tabs').dataTabs({
    activeIndex: activeTab
  });
});
