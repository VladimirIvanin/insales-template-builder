/**
 * Простые jquery-tabs
 */
(function($) {

  $(document).on('click', '[data-toggle="tabs"]', function(e) {
    e.preventDefault();

    var $this = $(this);
    var $target = $($this.attr('href'));
    var $swiper = $target.find('swiper-container');

    $target
      .parent()
        .children('.tab-block')
          .removeClass('is-active')
          .addClass('is-closed');

    $this
      .parents('.tabs-menu:first')
        .children('.tabs-menu-item')
          .removeClass('is-active')
          .addClass('is-closed');

    $this
      .parent()
        .removeClass('is-closed')
        .addClass('is-active');

    $target
      .removeClass('is-closed')
      .addClass('is-active');

    if ($swiper.lenght) {
      $swiper[0].swiper.update();
    }
  });

  $('.tabs-menu').each(function () {
    var $menu = $(this);

    $menu
      .find('.tabs-menu-link:first')
        .trigger('click');
  });

})(jQuery);
