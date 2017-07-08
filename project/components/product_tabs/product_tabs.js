$(document).ready(function() {

  var activeTab = 1;

  if (window.location.href.indexOf( '#review_form' ) > -1) {
    activeTab = $('[data-tab-anchor="review"]').index() + 1;
  }

  $('.js-product_tabs').dataTabs({
    activeIndex: activeTab
  });
});
