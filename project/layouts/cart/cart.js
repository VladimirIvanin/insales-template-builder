$(document).ready(function() {
  EventBus.subscribe('delete_items:insales:cart', function (data) {
    if (Site.template && Site.template != 'cart') {
      return false;
    }

    var $button = data.action.button;
    var $cartItem = $button.parents('.cart-item:first');
    var $emptyMessage = $('.js-cart-empty');
    var $cartForm = $('[data-cart-form]');

    $cartItem
      .slideUp(300, function () {
        $(this).remove();
      });
  });

  EventBus.subscribe('update_items:insales:cart', function (cart) {

    updateItemTotal(cart.order_lines);

    updateTotalPrice(cart.total_price);

  });

  function updateTotalPrice(_totalPrice) {
    $('.js-cart-totals').html( Shop.money.format( _totalPrice ) );
  }

  function updateItemTotal(order_lines) {
    _.forEach(order_lines, function (item) {
      var $item = $('[data-item-id="'+item.variant_id+'"]');
      $item.find('.js-item-total_price').each(function(index, el) {
        $(el).html( Shop.money.format( item.total_price ) );
      });;
    });
  }

});
