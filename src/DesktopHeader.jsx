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
import siteLanguageList from './site-language/constants'
// i18n
import messages from './Header.messages';
import { Form } from '@openedx/paragon';
// Assets
import { CaretIcon } from './Icons';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { publish } from '@edx/frontend-platform';
class DesktopHeader extends React.Component {
  constructor(props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  renderMenu(menu) {
    // Nodes are accepted as a prop
    if (!Array.isArray(menu)) {
      return menu;
    }

    return menu.map((menuItem) => {
      const {
        type,
        href,
        content,
        submenuContent,
        disabled,
        isActive,
        onClick,
      } = menuItem;

      if (type === 'item') {
        return (
          <a
            key={`${type}-${content}`}
            className={`nav-link${disabled ? ' disabled' : ''}${isActive ? ' active' : ''}`}
            href={href}
            onClick={onClick || null}
          >
            {content}
          </a>
        );
      }

      return (
        <Menu key={`${type}-${content}`} tag="div" className="nav-item" respondToPointerEvents>
          <MenuTrigger onClick={onClick || null} tag="a" className="nav-link d-inline-flex align-items-center" href={href}>
            {content} <CaretIcon role="img" aria-hidden focusable="false" />
          </MenuTrigger>
          <MenuContent className="pin-left pin-right shadow py-2">
            {submenuContent}
          </MenuContent>
        </Menu>
      );
    });
  }

  renderMainMenu() {
    const { mainMenu } = this.props;
    return this.renderMenu(mainMenu);
  }

  renderSecondaryMenu() {
    const { secondaryMenu } = this.props;
    return this.renderMenu(secondaryMenu);
  }

  renderUserMenu() {
    const {
      userMenu,
      avatar,
      username,
      intl,
    } = this.props;

    return (
      <Menu transitionClassName="menu-dropdown" transitionTimeout={250}>
        <MenuTrigger
          tag="button"
          aria-label={intl.formatMessage(messages['header.label.account.menu.for'], { username })}
          className="btn btn-outline-primary d-inline-flex align-items-center pl-2 pr-3"
        >
          <Avatar size="1.5em" src={avatar} alt="" className="mr-2" />
          {username} <CaretIcon role="img" aria-hidden focusable="false" />
        </MenuTrigger>
        <MenuContent className="mb-0 dropdown-menu show dropdown-menu-right pin-right shadow py-2">
          {userMenu.map((group, index) => (
            // eslint-disable-next-line react/jsx-no-comment-textnodes,react/no-array-index-key
            <React.Fragment key={index}>
              {group.heading && <div className="dropdown-header" role="heading" aria-level="1">{group.heading}</div>}
              {group.items.map(({
                type, content, href, disabled, isActive, onClick,
              }) => (
                <a
                  className={`dropdown-${type}${isActive ? ' active' : ''}${disabled ? ' disabled' : ''}`}
                  key={`${type}-${content}`}
                  href={href}
                  onClick={onClick || null}
                >
                  {content}
                </a>
              ))}
              {index < userMenu.length - 1 && <div className="dropdown-divider" role="separator" />}
            </React.Fragment>
          ))}
        </MenuContent>
      </Menu>
    );
  }

  renderLoggedOutItems() {
    const { loggedOutItems } = this.props;

    return loggedOutItems.map((item, i, arr) => (
      <a
        key={`${item.type}-${item.content}`}
        className={i < arr.length - 1 ? 'btn mr-2 btn-link' : 'btn mr-2 btn-outline-primary'}
        href={item.href}
      >
        {item.content}
      </a>
    ));
  }

  render() {
    const {
      logo,
      logoAltText,
      logoDestination,
      loggedIn,
      username,
      intl,
    } = this.props;
    const logoProps = { src: logo, alt: logoAltText, href: logoDestination };
    const logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'mw-100' : null;
    const handleChange = async (e) => {
      e.preventDefault();
      const requestConfig = { headers: { 'Content-Type': 'application/merge-patch+json' } };
      // const { username, userId } = getAuthenticatedUser();
      let userDomain = "";
      if (username !== undefined)
        userDomain = username.split('@')[1].replaceAll(".", '_')
      let processedParams = snakeCaseObject({ prefLang: e.target.value });
      processedParams = convertKeyNames(processedParams, {
        pref_lang: 'pref-lang',
      });
    
      await getAuthenticatedHttpClient()
        .patch(`${getConfig().LMS_BASE_URL}/api/user/v1/preferences/${username}`, processedParams, {
          headers: { 'Content-Type': 'application/merge-patch+json' },
        });
        
      const formData = new FormData();
      formData.append('language', e.target.value);
      try {
        await getAuthenticatedHttpClient()
          .post(`${getConfig().LMS_BASE_URL}/i18n/setlang/`, formData, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
          }).catch();
         } catch (e) {
            console.log(e)
          }
        publish(LOCALE_CHANGED, e.target.value);
        handleRtl();
        location.reload()
    };
    return (
      <header className="site-header-desktop">
        <a className="nav-skip sr-only sr-only-focusable" href="#main">{intl.formatMessage(messages['header.label.skip.nav'])}</a>
        <div className={`container-fluid ${logoClasses}`}>
          <div className="nav-container position-relative d-flex align-items-center">
            {logoDestination === null ? <Logo className="logo" userDomain={userDomain} src={logo} alt={logoAltText} /> : <LinkedLogo className="logo" {...logoProps} />}
            <nav
              aria-label={intl.formatMessage(messages['header.label.main.nav'])}
              className="nav main-nav"
            >
              {this.renderMainMenu()}
            </nav>
            <nav
              aria-label={intl.formatMessage(messages['header.label.secondary.nav'])}
              className="nav secondary-menu-container align-items-center ml-auto"
            >
              {loggedIn
                ? (
                  <>
                    {this.renderSecondaryMenu()}
                    <Form.Group controlId="language" className='mt-3'>
                      <Form.Control id='language' value={getLocale()} onChange={(e)=>{handleChange(e)}}  name={intl.formatMessage(messages["language"])}  as="select" floatingLabel={intl.formatMessage(messages["language"])}>
                      
                    { siteLanguageList.map(({ code, name }) => (<option  value={code}>{name}</option>))}
                        </Form.Control>
                        </Form.Group>
                      <div className='ml-3'>
                    {this.renderUserMenu()}
                    </div>

                  </>
                ) : this.renderLoggedOutItems()}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

DesktopHeader.propTypes = {
  mainMenu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  secondaryMenu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  userMenu: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['item', 'menu']),
      href: PropTypes.string,
      content: PropTypes.string,
      isActive: PropTypes.bool,
      onClick: PropTypes.func,
    })),
  })),
  loggedOutItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
  })),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool,

  // i18n
  intl: intlShape.isRequired,
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
  loggedIn: false,
};

export default injectIntl(DesktopHeader);
