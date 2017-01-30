$(document).ready(function() {
  initCollectionMenu();
  initCollectionFilter();
});

function initCollectionFilter() {
  $('.filter').collapse({
    toggle: '.filter-toggle',
    target: '.filter-items-wrapper',
    startActive: 'is-active'
  });

  $('.js-filter-range-slider').rangeSlider();
  $('.js-filter-range-slider-price').rangeSlider();
}

function initCollectionMenu () {
  $('.collection-menu-item').collapse({
    toggle: '.collection-menu-marker',
    target: '.collection-menu',
    startActive: 'is-current'
  });
};


$(function () {
  $('.js-filter-trigger').on('change', function (event) {
    $(this).parents('form:first')
    .submit();
  });
  $(document)
    .on('click', 'label', function (event) {
      var $form = $(this).parents('form:first');
      var $filterItem = $(this).parents('.filter-item');
      var $checkbox = $filterItem.find(':checkbox');

      if ($form.hasClass('collection-filter')) {
        event.preventDefault();
        $checkbox
          .prop('checked', !$checkbox.prop('checked'))
          .trigger('change');
      }
    })
    .on('change', 'input', function (event) {
      var $form = $(this).parents('form:first');

      sendFilter($form, $(this));
    })
    .on('click', '[type="submit"]', function (event) {
      var $form = $(this).parents('form:first');

      if ($form.hasClass('collection-filter')) {
        event.preventDefault();
        sendFilter($form, $(event.target));
      }
    })
    .on('check', '.collection-filter', function (event) {

      sendFilter($(this), $(this));
    });

  function sendFilter ($form, $source) {
    if (!$form.hasClass('collection-filter')) {
      return false;
    }

    var isSubmitOnChange = $form.data('submit-onchange');
    var isButton = $source.is('button');

    if (isSubmitOnChange || isButton) {
      $form.submit();
    }
  };
});

$(document).ready(function() {
  Products.setConfig({
    initOption: true,
    filtered: false,
    showVariants: true,
    useMax: false,
    decimal: {
      kgm: 1,
      dmt: 1
    },
    options: {
      'Цвет': 'option-color',
      'Размер': 'option-span',
      'default': 'option-select'
    }
  });

  EventBus.subscribe('update_variant:insales:product', function (variantData) {
    updateVariantInfo(variantData, {
      oldPrice: '[data-product-old-price]',
      price: '[data-product-price]',
      sku: '[data-product-sku]',
    });
  });

  function updateVariantInfo(variantData, options) {

    var _defaults = {
      oldPrice: '[data-product-old-price]',
      price: '[data-product-price]',
      sku: '[data-product-sku]',
      available: '[data-product-available]'
    }

    if (!variantData.action) {
      return false;
    }

    var _options = options || {};
    var _arguments = _.merge(_defaults, _options)

    var _productId = variantData.product_id;
    var $form = variantData.action.product;
    var $price = $form.find(_arguments.price);
    var $oldPrice = $form.find(_arguments.oldPrice);
    var $available = $form.find(_arguments.available);
    var $sku = $form.find(_arguments.sku);

    $price.html(Shop.money.format(variantData.price))

    if (variantData.old_price) {
      var _oldPrice = Shop.money.format(variantData.old_price);
      $oldPrice.show().html(_oldPrice)
    }else{
      $oldPrice.hide()
    }

    if (variantData.sku) {
      $sku.html(variantData.sku).show()
    }else{
      $sku.html('').hide()
    }

    if (variantData.available) {
      $available.html('Есть в наличии').addClass('is-available');
    }else{
      $available.html('Нет в наличии').removeClass('is-available');
    }
  }
});
