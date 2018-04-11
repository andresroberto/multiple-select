'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var MultipleSelect = function (_React$Component) {
  _inherits(MultipleSelect, _React$Component);

  function MultipleSelect(props) {
    _classCallCheck(this, MultipleSelect);

    var _this = _possibleConstructorReturn(this, (MultipleSelect.__proto__ || Object.getPrototypeOf(MultipleSelect)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(MultipleSelect, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var values = [].concat(_toConsumableArray(event.target.options)).filter(function (option) {
        return option.selected;
      }).map(function (option) {
        return option.value;
      });

      this.props.onChange(event, values);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('select', _extends({}, this.props, {
        multiple: true,
        onChange: this.handleChange
      }));
    }
  }]);

  return MultipleSelect;
}(React.Component);

module.exports = MultipleSelect;
