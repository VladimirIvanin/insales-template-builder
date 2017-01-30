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
});
