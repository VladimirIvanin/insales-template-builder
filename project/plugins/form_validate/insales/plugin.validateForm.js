(function ($, _, document, window) {
  window.validateForm = function ($form) {
    var result = [];
    var $fields = $form.find('.form-row');

    $fields.each(function (i, field) {
      var $field = $(field);

      if (!isValidField($field)) {
        result.push({
          field: $field,
        });
      }
    });

    markErrors(result, $form);

    return result;
  };

  function isValidField ($field) {
    var isValid = true;
    var $input = $field.find('.form-field');

    var _isRequired = $field.hasClass('is-required');
    var _isEmpty = !$input.val();

    if (_isRequired && _isEmpty) {
      isValid = false;
    }

    return isValid;
  }

  window.parseErrors = function (errors) {
    var result = {};

    return result;
  }

  window.markErrors = function (errors, $form) {
    _.forEach(errors, function (error) {
      error.field
        .addClass('with-error');
    });
  };

  $(document).on('focus', '.form-field', function () {
    $(this).parents('.form-row:first')
      .removeClass('with-error');
  });
})(jQuery, _, document, window);
