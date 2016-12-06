/**
 *  Collapse
 */
(function($, _, window, document) {
  var Collapse = function (elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this._options = options;

    this._init();
    return this;
  }

  Collapse.prototype._init = function () {
    var self = this;

    self.options = _.merge(self._defaults(), self._options);

    self.elements = {
      base: self.$elem,
      toggle: $(self.options.toggle, self.$elem).first(),
      area: $(self.options.area, self.$elem).first(),
    };

    if (_.size(self.elements.toggle) > 0) {
      self.elements.toggle[0].Collapse = self;
      this.bind();
    };
  };

  Collapse.prototype._defaults = function () {
    var _default = {
      toggle: '',
      area: '',
      startActive: '',
      offAt: null,
    };

    return _default;
  };

  Collapse.prototype.openAtStart = function () {
    var self = this;

    if (self.options.startActive && self.elements.base.hasClass(self.options.startActive)) {
      self.elements.base
        .addClass('is-open')
        .removeClass('is-close');
      self.elements.toggle
        .addClass('is-active');
    } else {
      self.elements.base
        .addClass('is-close')
        .removeClass('is-open');
      self.elements.toggle
        .removeClass('is-active');
    }
  };

  Collapse.prototype.bindToggleButton = function () {
    var self = this;

    self.elements.toggle.on('click', self._toggle);
  };

  Collapse.prototype.unbindToggleButton = function () {
    var self = this;

    self.elements.toggle.off('click', self._toggle);
  };

  Collapse.prototype._toggle = function (event) {
    var self = this.Collapse;

    event.preventDefault();

    self.elements.base
      .toggleClass('is-open')
      .toggleClass('is-close');

    self.elements.toggle
      .toggleClass('is-active');
  };

  Collapse.prototype.bind = function () {
    var self = this;

    self.openAtStart();
    self.bindToggleButton();
  };

  $.fn.collapse = function(options) {
    return this.each (function () {
      if (!this._Collapse) {
        this._Collapse = new Collapse(this, options);
      }
    });
  };
})(jQuery, _, window , document);
