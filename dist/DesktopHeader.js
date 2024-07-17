function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo, Logo } from './Logo';

// i18n
import messages from './Header.messages';

// Assets
import { CaretIcon } from './Icons';
var DesktopHeader = /*#__PURE__*/function (_React$Component) {
  function DesktopHeader(props) {
    _classCallCheck(this, DesktopHeader);
    // eslint-disable-line no-useless-constructor
    return _callSuper(this, DesktopHeader, [props]);
  }
  _inherits(DesktopHeader, _React$Component);
  return _createClass(DesktopHeader, [{
    key: "renderMenu",
    value: function renderMenu(menu) {
      // Nodes are accepted as a prop
      if (!Array.isArray(menu)) {
        return menu;
      }
      return menu.map(function (menuItem) {
        var type = menuItem.type,
          href = menuItem.href,
          content = menuItem.content,
          submenuContent = menuItem.submenuContent,
          disabled = menuItem.disabled,
          isActive = menuItem.isActive,
          onClick = menuItem.onClick;
        if (type === 'item') {
          return /*#__PURE__*/React.createElement("a", {
            key: "".concat(type, "-").concat(content),
            className: "nav-link".concat(disabled ? ' disabled' : '').concat(isActive ? ' active' : ''),
            href: href,
            onClick: onClick || null
          }, content);
        }
        return /*#__PURE__*/React.createElement(Menu, {
          key: "".concat(type, "-").concat(content),
          tag: "div",
          className: "nav-item",
          respondToPointerEvents: true
        }, /*#__PURE__*/React.createElement(MenuTrigger, {
          onClick: onClick || null,
          tag: "a",
          className: "nav-link d-inline-flex align-items-center",
          href: href
        }, content, " ", /*#__PURE__*/React.createElement(CaretIcon, {
          role: "img",
          "aria-hidden": true,
          focusable: "false"
        })), /*#__PURE__*/React.createElement(MenuContent, {
          className: "pin-left pin-right shadow py-2"
        }, submenuContent));
      });
    }
  }, {
    key: "renderMainMenu",
    value: function renderMainMenu() {
      var mainMenu = this.props.mainMenu;
      return this.renderMenu(mainMenu);
    }
  }, {
    key: "renderSecondaryMenu",
    value: function renderSecondaryMenu() {
      var secondaryMenu = this.props.secondaryMenu;
      return this.renderMenu(secondaryMenu);
    }
  }, {
    key: "renderUserMenu",
    value: function renderUserMenu() {
      var _this$props = this.props,
        userMenu = _this$props.userMenu,
        avatar = _this$props.avatar,
        username = _this$props.username,
        intl = _this$props.intl;
      return /*#__PURE__*/React.createElement(Menu, {
        transitionClassName: "menu-dropdown",
        transitionTimeout: 250
      }, /*#__PURE__*/React.createElement(MenuTrigger, {
        tag: "button",
        "aria-label": intl.formatMessage(messages['header.label.account.menu.for'], {
          username: username
        }),
        className: "btn btn-outline-primary d-inline-flex align-items-center pl-2 pr-3"
      }, /*#__PURE__*/React.createElement(Avatar, {
        size: "1.5em",
        src: avatar,
        alt: "",
        className: "mr-2"
      }), username, " ", /*#__PURE__*/React.createElement(CaretIcon, {
        role: "img",
        "aria-hidden": true,
        focusable: "false"
      })), /*#__PURE__*/React.createElement(MenuContent, {
        className: "mb-0 dropdown-menu show dropdown-menu-right pin-right shadow py-2"
      }, userMenu.map(function (group, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/jsx-no-comment-textnodes,react/no-array-index-key
          React.createElement(React.Fragment, {
            key: index
          }, group.heading && /*#__PURE__*/React.createElement("div", {
            className: "dropdown-header",
            role: "heading",
            "aria-level": "1"
          }, group.heading), group.items.map(function (_ref) {
            var type = _ref.type,
              content = _ref.content,
              href = _ref.href,
              disabled = _ref.disabled,
              isActive = _ref.isActive,
              onClick = _ref.onClick;
            return /*#__PURE__*/React.createElement("a", {
              className: "dropdown-".concat(type).concat(isActive ? ' active' : '').concat(disabled ? ' disabled' : ''),
              key: "".concat(type, "-").concat(content),
              href: href,
              onClick: onClick || null
            }, content);
          }), index < userMenu.length - 1 && /*#__PURE__*/React.createElement("div", {
            className: "dropdown-divider",
            role: "separator"
          }))
        );
      })));
    }
  }, {
    key: "renderLoggedOutItems",
    value: function renderLoggedOutItems() {
      var loggedOutItems = this.props.loggedOutItems;
      return loggedOutItems.map(function (item, i, arr) {
        return /*#__PURE__*/React.createElement("a", {
          key: "".concat(item.type, "-").concat(item.content),
          className: i < arr.length - 1 ? 'btn mr-2 btn-link' : 'btn mr-2 btn-outline-primary',
          href: item.href
        }, item.content);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        logo = _this$props2.logo,
        logoAltText = _this$props2.logoAltText,
        logoDestination = _this$props2.logoDestination,
        loggedIn = _this$props2.loggedIn,
        intl = _this$props2.intl;
      var logoProps = {
        src: logo,
        alt: logoAltText,
        href: logoDestination
      };
      var logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'mw-100' : null;
      return /*#__PURE__*/React.createElement("header", {
        className: "site-header-desktop"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-skip sr-only sr-only-focusable",
        href: "#main"
      }, intl.formatMessage(messages['header.label.skip.nav'])), /*#__PURE__*/React.createElement("div", {
        className: "container-fluid ".concat(logoClasses)
      }, /*#__PURE__*/React.createElement("div", {
        className: "nav-container position-relative d-flex align-items-center"
      }, logoDestination === null ? /*#__PURE__*/React.createElement(Logo, {
        className: "logo",
        src: logo,
        alt: logoAltText
      }) : /*#__PURE__*/React.createElement(LinkedLogo, _extends({
        className: "logo"
      }, logoProps)), /*#__PURE__*/React.createElement("nav", {
        "aria-label": intl.formatMessage(messages['header.label.main.nav']),
        className: "nav main-nav"
      }, this.renderMainMenu()), /*#__PURE__*/React.createElement("nav", {
        "aria-label": intl.formatMessage(messages['header.label.secondary.nav']),
        className: "nav secondary-menu-container align-items-center ml-auto"
      }, loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, this.renderSecondaryMenu(), this.renderUserMenu()) : this.renderLoggedOutItems()))));
    }
  }]);
}(React.Component);
DesktopHeader.propTypes = {
  mainMenu: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  secondaryMenu: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  userMenu: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['item', 'menu']),
      href: PropTypes.string,
      content: PropTypes.string,
      isActive: PropTypes.bool,
      onClick: PropTypes.func
    }))
  })),
  loggedOutItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string
  })),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
  // i18n
  intl: intlShape.isRequired
};
DesktopHeader.defaultProps = {
  mainMenu: [],
  secondaryMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false
};
export default injectIntl(DesktopHeader);
//# sourceMappingURL=DesktopHeader.js.map