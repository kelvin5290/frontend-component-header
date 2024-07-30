function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { FETCH_SITE_LANGUAGES } from './actions';
export var defaultState = {
  loading: false,
  loaded: false,
  loadingError: null,
  siteLanguageList: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (action !== null) {
    switch (action.type) {
      case FETCH_SITE_LANGUAGES.BEGIN:
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          loaded: false,
          loadingError: null
        });
      case FETCH_SITE_LANGUAGES.SUCCESS:
        return _objectSpread(_objectSpread({}, state), {}, {
          siteLanguageList: action.payload.siteLanguageList,
          loading: false,
          loaded: true,
          loadingError: null
        });
      case FETCH_SITE_LANGUAGES.FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          loaded: false,
          loadingError: action.payload.error
        });
      case FETCH_SITE_LANGUAGES.RESET:
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          loaded: false,
          loadingError: null
        });
      default:
    }
  }
  return state;
};
export default reducer;
//# sourceMappingURL=reducers.js.map