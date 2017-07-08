$(document).ready(function() {
  EventBus.subscribe('add_items:insales:cart', function (cart) {

    if (cart.action.button && cart.action.button.hasClass('in-product')) {
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
    }else{
       alertify.success('Товар добавлен в корзину');
    }
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
