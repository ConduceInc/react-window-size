(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function windowSize(Component) {
    var WindowSize = function (_React$Component) {
      _inherits(WindowSize, _React$Component);

      function WindowSize() {
        _classCallCheck(this, WindowSize);

        var _this = _possibleConstructorReturn(this, (WindowSize.__proto__ || Object.getPrototypeOf(WindowSize)).call(this));

        _this.state = {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
        return _this;
      }

      _createClass(WindowSize, [{
        key: 'handleResize',
        value: function handleResize() {
          // set initial state
          this.setState({
            width: document.body.clientWidth,
            height: document.body.clientHeight
          });
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          // bind window resize listeners
          this._handleResize = this.handleResize.bind(this);
          window.addEventListener('resize', this._handleResize);
          this._handleResizeTimeout = setTimeout(this._handleResize, 1000);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          // clean up listeners
          window.removeEventListener('resize', this._handleResize);
          if (this._handleResizeTimeout) {
            clearTimeout(this._handleResizeTimeout);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              forwardRef = _props.forwardRef,
              rest = _objectWithoutProperties(_props, ['forwardRef']);

          // pass window dimensions as props to wrapped component
          return _react2.default.createElement(Component, _extends({}, rest, {
            ref: forwardRef,
            windowWidth: this.state.width,
            windowHeight: this.state.height
          }));
        }
      }]);

      return WindowSize;
    }(_react2.default.Component);

    WindowSize.propTypes = {
      forwardRef: _propTypes2.default.element
    };

    function forwardRef(props, ref) {
      return _react2.default.createElement(WindowSize, _extends({}, props, { forwardRef: ref }));
    }

    var name = Component.displayName || Component.name || 'Component';
    forwardRef.displayName = 'windowSize(' + name + ')';

    return _react2.default.forwardRef(forwardRef);
  }

  windowSize.propTypes = {
    Component: _propTypes2.default.element
  };

  exports.default = windowSize;
});