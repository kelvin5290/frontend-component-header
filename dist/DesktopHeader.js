function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo, Logo } from './Logo';
import { getLocale, handleRtl, LOCALE_CHANGED } from '@edx/frontend-platform/i18n';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { convertKeyNames, snakeCaseObject } from '@edx/frontend-platform/utils';
import siteLanguageList from './site-language/constants';
// i18n
import messages from './Header.messages';
import { Form } from '@openedx/paragon';
// Assets
import { CaretIcon } from './Icons';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { publish } from '@edx/frontend-platform';
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
        username = _this$props2.username,
        intl = _this$props2.intl;
      var logoProps = {
        src: logo,
        alt: logoAltText,
        href: logoDestination
      };
      var logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'mw-100' : null;
      var handleChange = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
          var requestConfig, userDomain, processedParams, _getAuthenticatedUser, username, userId, formData;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                requestConfig = {
                  headers: {
                    'Content-Type': 'application/merge-patch+json'
                  }
                };
                userDomain = "";
                if (username !== undefined) userDomain = username.split('@')[1].replaceAll(".", '_');
                processedParams = snakeCaseObject({
                  prefLang: e.target.value
                });
                processedParams = convertKeyNames(processedParams, {
                  pref_lang: 'pref-lang'
                });
                _getAuthenticatedUser = getAuthenticatedUser(), username = _getAuthenticatedUser.username, userId = _getAuthenticatedUser.userId;
                _context.next = 9;
                return getAuthenticatedHttpClient().patch("".concat(getConfig().LMS_BASE_URL, "/api/user/v1/preferences/").concat(username), processedParams, {
                  headers: {
                    'Content-Type': 'application/merge-patch+json'
                  }
                });
              case 9:
                formData = new FormData();
                formData.append('language', e.target.value);
                _context.prev = 11;
                _context.next = 14;
                return getAuthenticatedHttpClient().post("".concat(getConfig().LMS_BASE_URL, "/i18n/setlang/"), formData, {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                })["catch"]();
              case 14:
                _context.next = 19;
                break;
              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](11);
                console.log(_context.t0);
              case 19:
                publish(LOCALE_CHANGED, e.target.value);
                handleRtl();
                location.reload();
              case 22:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[11, 16]]);
        }));
        return function handleChange(_x) {
          return _ref2.apply(this, arguments);
        };
      }();
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
        userDomain: userDomain,
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
      }, loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, this.renderSecondaryMenu(), /*#__PURE__*/React.createElement(Form.Group, {
        controlId: "language",
        className: "mt-3"
      }, /*#__PURE__*/React.createElement(Form.Control, {
        id: "language",
        value: getLocale(),
        onChange: function onChange(e) {
          handleChange(e);
        },
        name: intl.formatMessage(messages["language"]),
        as: "select",
        floatingLabel: intl.formatMessage(messages["language"])
      }, siteLanguageList.map(function (_ref3) {
        var code = _ref3.code,
          name = _ref3.name;
        return /*#__PURE__*/React.createElement("option", {
          value: code
        }, name);
      }))), /*#__PURE__*/React.createElement("div", {
        className: "ml-3"
      }, this.renderUserMenu())) : this.renderLoggedOutItems()))));
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