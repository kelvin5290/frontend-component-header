function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { defineMessages } from '@edx/frontend-platform/i18n';
var messages = defineMessages(_defineProperty({
  dashboard: {
    id: 'header.menu.dashboard.label',
    defaultMessage: 'Dashboard',
    description: 'The text for the user menu Dashboard navigation link.'
  },
  help: {
    id: 'header.help.label',
    defaultMessage: 'Help',
    description: 'The text for the link to the Help Center'
  },
  profile: {
    id: 'header.menu.profile.label',
    defaultMessage: 'Profile',
    description: 'The text for the user menu Profile navigation link.'
  },
  account: {
    id: 'header.menu.account.label',
    defaultMessage: 'Account',
    description: 'The text for the user menu Account navigation link.'
  },
  orderHistory: {
    id: 'header.menu.orderHistory.label',
    defaultMessage: 'Order History',
    description: 'The text for the user menu Order History navigation link.'
  },
  skipNavLink: {
    id: 'header.navigation.skipNavLink',
    defaultMessage: 'Skip to main content.',
    description: 'A link used by screen readers to allow users to skip to the main content of the page.'
  },
  signOut: {
    id: 'header.menu.signOut.label',
    defaultMessage: 'Sign Out',
    description: 'The label for the user menu Sign Out action.'
  }
}, "signOut", {
  id: 'language',
  defaultMessage: 'Language',
  description: 'The label for the user menu Sign Out action.'
}));
export default messages;
//# sourceMappingURL=messages.js.map