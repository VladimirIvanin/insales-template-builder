EventBus.subscribe('update_items:insales:compares', function (data) {
  $('.js-compares-widget-count').html(data.products.length);
});

EventBus.subscribe('remove_item:insales:compares', function (data) {
  if (Site.template != 'compare') {
    return false;
  }

  $('[data-compared-id="'+ data.action.item +'"]').remove();

  if (data.products.length == 0) {
    $('#js-compare-inner').hide();
    $('.js-compare-empty').removeClass('hide');
  };
});
