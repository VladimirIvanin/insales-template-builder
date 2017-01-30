$(document).ready(function() {
  EventBus.subscribe('update_items:insales:cart', function (cart) {
    if (cart.items_count > 0) {
      $('[data-items-count]').html('('+ cart.items_count +')')
    }
  });
});
