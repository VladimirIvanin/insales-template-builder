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
