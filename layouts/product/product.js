(function() {
  var productThumbs = new Swiper('.js-gallery-thumbs', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 4,
    nextButton: '.js-gallery-thumbs-next',
    prevButton: '.js-gallery-thumbs-prev',
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slideActiveClass: 'js-slide-zoomer'
      },
      768: {
        slidesPerView: 1
      }
    }
  });

  var similars = new Swiper('.js-similar-products', {
    //pagination: '.news-slider-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    uniqueNavElements: true,
    slidesPerView: 4,
    loop: false,
    simulateTouch: false,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      380: {
        slidesPerView: 1,
      }
    }
  });

  var related = new Swiper('.js-related-products', {
    //pagination: '.news-slider-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    uniqueNavElements: true,
    slidesPerView: 4,
    loop: false,
    simulateTouch: false,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      380: {
        slidesPerView: 1,
      }
    }
  });

  $('.js-product-preorder').on('click', function (event) {
    event.preventDefault();

    alertify.sendMessage({
      form: '#feedback-form',
      title: 'Предзаказ товара'
    })
  })
})();

var mzOptions = {
  expand: 'window',
  rightClick: 'true',
  hint: 'off',
};

// Реакция на переключение варианта товара
EventBus.subscribe('update_variant:insales:product', function (variant) {
  var $product = variant.action.product;
  var $buttonBuy = $product.find('.js-variant-shown');
  var $buttonHidden = $product.find('.js-variant-hidden');
  var $quickCheckout = $product.find('[data-quick-checkout]');
  var $buttonPreorder = $product.find('.js-variant-preorder');
  var $priceCurrent = $product.find('.js-product-price');
  var $priceOld = $product.find('.js-product-old-price');
  var $skuWrapper = $product.find('.js-product-sku-wrapper');
  var $sku = $product.find('.js-product-sku');

  var notAvailable = InsalesThemeSettings.product_not_available;

  $buttonBuy.hide();
  $buttonHidden.hide();
  $buttonPreorder.hide();
  $quickCheckout
    .prop('disabled', true);

  $priceCurrent
    .html(Shop.money.format(variant.action.price));
  $priceOld
    .html(Shop.money.format(variant.old_price));

  if (variant.sku) {
    $skuWrapper.show();
    $sku.text(variant.sku);
  } else {
    $skuWrapper.hide();
  }

  if (variant.available) {
    $buttonBuy.show();
    $quickCheckout
      .prop('disabled', false);
  } else {
    switch (notAvailable) {
      case 'preorder':
        $buttonPreorder.show();
        break;
      case 'hidden':
        $buttonHidden.show();
        break;
      case 'shown':
        $buttonBuy.show();
        $quickCheckout
          .prop('disabled', false);
        break;
    }
  }

  $('select').styleSelect();
  setTimeout(function() {
  }, 0);
});

// Переключаем кнопочку добавить или удалить товар из сравнения
EventBus.subscribe('update_items:insales:compares', function (data) {
  var $product = $('.product-form');
  var productId = $product.data('product-id');
  var $compareAdd = $product.find('.compare-add');
  var $compareDelete = $product.find('.compare-delete');

  var inCompare = _.find(data.products, function(product) {
    return product.id == productId;
  });

  if (inCompare) {
    $compareAdd.hide();
    $compareDelete.show();
  } else {
    $compareAdd.show();
    $compareDelete.hide();
  }
});

(function() {
  $('.reviews-wrapper').collapse({
    toggle: '.js-reviews-toggle',
    target: '.reviews-form',
  });
})();
