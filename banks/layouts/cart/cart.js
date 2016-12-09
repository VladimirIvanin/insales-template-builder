EventBus.subscribe('update_items:insales:cart', function (data) {
  $('.js-shopcart-widget-amount').html(Shop.money.format(data.total_price));
  $('.js-shopcart-widget-count').html(data.items_count);
});

EventBus.subscribe('delete_items:insales:cart', function (data) {
  if (Site.template != 'cart') {
    return false;
  }

  var $button = data.action.button;
  var $cartItem = $button.parents('.cart-item:first');
  var $emptyMessage = $('.js-cart-empty');
  var $cartForm = $('[data-cart-form]');

  $cartItem
    .slideUp(300, function () {
      $(this).remove();

      if (data.order_lines.length == 0) {
        $cartForm
          .addClass('hide');
        $emptyMessage
          .removeClass('hide');
      }
    });
});

EventBus.subscribe('update_variant:insales:item', function (data) {
  if (Site.template != 'cart') {
    return false;
  }

  var $item = data.action.product;
  var $price = $item.find('.js-item-price');
  var $total = $item.find('.js-item-total-price');
  var total = data.action.price * data.action.quantity.current;

  $price.html(Shop.money.format(data.action.price));
  $total.html(Shop.money.format(total));
});

EventBus.subscribe('update_items:insales:cart', function (data) {
  if (Site.template != 'cart') {
    return false;
  }

  $('.js-shopcart-total-summ').html(Shop.money.format(data.total_price));
});

$(function () {
  EventBus.subscribe('update_items:insales:cart', function (data) {
    if (Site.template != 'cart') {
      return false;
    }

    $('.js-discount-comment-list').html(Template.render(data, 'cart-discounts'));
  })
})
