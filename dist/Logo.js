var _excluded = ["src", "alt", "userDomain"],
  _excluded2 = ["href", "src", "alt", "userDomain"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
import React from 'react';
import PropTypes from 'prop-types';
var Logo = function Logo(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    userDomain = _ref.userDomain,
    attributes = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-auto d-flex flex-row"
  }, /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt
  }, attributes)), userDomain && /*#__PURE__*/React.createElement("img", _extends({
    className: "ml-2",
    onError: function onError(i) {
      return i.target.src = '';
    },
    src: "https://d2ttnbhfjsw4ca.cloudfront.net/".concat(userDomain, ".png"),
    alt: alt
  }, attributes)));
};
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
var LinkedLogo = function LinkedLogo(_ref2) {
  var href = _ref2.href,
    src = _ref2.src,
    alt = _ref2.alt,
    userDomain = _ref2.userDomain,
    attributes = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, attributes, {
    className: "mx-auto d-flex flex-row"
  }), /*#__PURE__*/React.createElement("img", {
    className: "d-block",
    src: src,
    alt: alt
  }), userDomain && /*#__PURE__*/React.createElement("img", _extends({
    className: "ml-2",
    onError: function onError(ev) {
      ev.style.display = 'none';
    },
    src: "https://d2ttnbhfjsw4ca.cloudfront.net/".concat(userDomain, ".png"),
    alt: alt
  }, attributes)));
};
LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export { LinkedLogo, Logo };
export default Logo;
//# sourceMappingURL=Logo.js.map