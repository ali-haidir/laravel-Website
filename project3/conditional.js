var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_React$Component) {
  _inherits(Auth, _React$Component);

  function Auth(props) {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

    _this.handleLoginClick = _this.handleLoginClick.bind(_this);
    _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
    _this.LoginButton = _this.LoginButton.bind(_this);
    _this.LogoutButton = _this.LogoutButton.bind(_this);
    _this.renderOnce = _this.renderOnce.bind(_this);
    _this.state = { authenticated: false, displayed: false };
    return _this;
  }

  _createClass(Auth, [{
    key: 'renderOnce',
    value: function renderOnce() {
      this.setState({ displayed: true });
    }
  }, {
    key: 'handleLoginClick',
    value: function handleLoginClick() {
      this.renderOnce();
      this.setState({ authenticated: true });
    }
  }, {
    key: 'handleLogoutClick',
    value: function handleLogoutClick() {
      this.renderOnce();
      this.setState({ authenticated: false });
    }
  }, {
    key: 'LoginButton',
    value: function LoginButton(props) {
      return React.createElement(
        'button',
        { onClick: props.onClick },
        'Login'
      );
    }
  }, {
    key: 'LogoutButton',
    value: function LogoutButton(props) {
      return React.createElement(
        'button',
        { onClick: props.onClick },
        'Logout'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var once = void 0;
      if (!this.state.displayed) {
        once = React.createElement(
          'h1',
          null,
          'Once'
        );
      }
      if (this.state.authenticated) {
        return React.createElement(
          'div',
          null,
          once,
          React.createElement(this.LogoutButton, { onClick: this.handleLogoutClick })
        );
      }
      return React.createElement(
        'div',
        null,
        once,
        React.createElement(this.LoginButton, { onClick: this.handleLoginClick })
      );
    }
  }]);

  return Auth;
}(React.Component);

ReactDOM.render(React.createElement(Auth, null), document.getElementById('conditional'));