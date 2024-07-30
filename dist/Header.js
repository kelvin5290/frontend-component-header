import React, { useContext } from 'react';
import Responsive from 'react-responsive';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { APP_CONFIG_INITIALIZED, ensureConfig, mergeConfig, getConfig, subscribe } from '@edx/frontend-platform';
import PropTypes from 'prop-types';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import messages from './Header.messages';
ensureConfig(['LMS_BASE_URL', 'LOGOUT_URL', 'LOGIN_URL', 'SITE_NAME', 'LOGO_URL', 'ORDER_HISTORY_URL'], 'Header component');
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER
  }, 'Header additional config');
});

/**
 * Header component for the application.
 * Displays a header with the provided main menu, secondary menu, and user menu when the user is authenticated.
 * If any of the props (mainMenuItems, secondaryMenuItems, userMenuItems) are not provided, default
 * items are displayed.
 * For more details on how to use this component, please refer to this document:
 * https://github.com/openedx/frontend-component-header/blob/master/docs/using_custom_header.rst
 *
 * @param {list} mainMenuItems - The list of main menu items to display.
 * See the documentation for the structure of main menu item.
 * @param {list} secondaryMenuItems - The list of secondary menu items to display.
 * See the documentation for the structure of secondary menu item.
 * @param {list} userMenuItems - The list of user menu items to display.
 * See the documentation for the structure of user menu item.
 */
var Header = function Header(_ref) {
  var intl = _ref.intl,
    mainMenuItems = _ref.mainMenuItems,
    secondaryMenuItems = _ref.secondaryMenuItems,
    userMenuItems = _ref.userMenuItems;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser,
    config = _useContext.config;
  var defaultMainMenu = [{
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    content: intl.formatMessage(messages['header.links.courses'])
  }];
  var defaultUserMenu = authenticatedUser === null ? [] : [{
    heading: '',
    items: [{
      type: 'item',
      href: "".concat(config.LMS_BASE_URL, "/dashboard"),
      content: intl.formatMessage(messages['header.user.menu.dashboard'])
    },
    // {
    //   type: 'item',
    //   href: `${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`,
    //   content: intl.formatMessage(messages['header.user.menu.profile']),
    // },
    // {
    //   type: 'item',
    //   href: config.ACCOUNT_SETTINGS_URL,
    //   content: intl.formatMessage(messages['header.user.menu.account.settings']),
    // },
    // // Users should only see Order History if have a ORDER_HISTORY_URL define in the environment.
    // ...(config.ORDER_HISTORY_URL ? [{
    //   type: 'item',
    //   href: config.ORDER_HISTORY_URL,
    //   content: intl.formatMessage(messages['header.user.menu.order.history']),
    // }] : []),
    {
      type: 'item',
      href: config.LOGOUT_URL,
      content: intl.formatMessage(messages['header.user.menu.logout'])
    }]
  }];
  var mainMenu = mainMenuItems || defaultMainMenu;
  var secondaryMenu = secondaryMenuItems || [];
  var userMenu = authenticatedUser === null ? [] : userMenuItems || defaultUserMenu;
  var loggedOutItems = [{
    type: 'item',
    href: config.LOGIN_URL,
    content: intl.formatMessage(messages['header.user.menu.login'])
  }
  // {
  //   type: 'item',
  //   href: `${config.LMS_BASE_URL}/register`,
  //   content: intl.formatMessage(messages['header.user.menu.register']),
  // },
  ];
  var props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: "".concat(config.LMS_BASE_URL, "/dashboard"),
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.email : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    mainMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : mainMenu,
    secondaryMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : secondaryMenu,
    userMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : userMenu,
    loggedOutItems: getConfig().AUTHN_MINIMAL_HEADER ? [] : loggedOutItems
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Responsive, {
    maxWidth: 769
  }, /*#__PURE__*/React.createElement(MobileHeader, props)), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 769
  }, /*#__PURE__*/React.createElement(DesktopHeader, props)));
};
Header.defaultProps = {
  mainMenuItems: null,
  secondaryMenuItems: null,
  userMenuItems: null
};
Header.propTypes = {
  intl: intlShape.isRequired,
  mainMenuItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  secondaryMenuItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['item', 'menu']),
      href: PropTypes.string,
      content: PropTypes.string,
      isActive: PropTypes.bool
    }))
  }))
};
export default injectIntl(Header);
//# sourceMappingURL=Header.js.map