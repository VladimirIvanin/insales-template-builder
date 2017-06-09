(function ($, _, window, document) {

  var RangeSlider = function (elem, options) {
    var self = this;

    self.slider = null;
    self.$elem = $(elem);
    self.$placeholder = self.$elem.find('[data-range-placeholder]');
    self.$from = self.$elem.find('[data-range-from]');
    self.$to = self.$elem.find('[data-range-to]');
    self.$form = self.$elem.parents('form:first');

    self.options = _.merge({
      type: 'double',
      onFinish: function (data) {
        self.send(data);
      },
      onChange: function (data) {
        self.changeInput(data);
      },
    }, self.$placeholder.data(), options);

    self.init();

    return self;
  };

  RangeSlider.prototype.init = function () {
    var self = this;

    self.$elem.find('.irs').remove();

    self.$placeholder.ionRangeSlider(self.options);
    self.slider = self.$placeholder.data('ionRangeSlider');
  };

  RangeSlider.prototype.send = function (data) {
    var self = this;

    self.$from.prop('disabled', (data.min == data.from));
    self.$to.prop('disabled', (data.max == data.to));
    self.$form.trigger('check');
  };

  RangeSlider.prototype.changeInput = function (data) {
    var self = this;

    self.$from.val(data.from);
    self.$to.val(data.to);
  };

  $.fn.rangeSlider = function (options) {
    return this.each (function () {
      if (!this._RangeSlider) {
        this._RangeSlider = new RangeSlider(this, options);
      };
    });
  }
})(jQuery, _, window, document);
