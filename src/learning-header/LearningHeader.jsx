import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { Form } from '@openedx/paragon';
import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { publish } from '@edx/frontend-platform';
import { convertKeyNames, snakeCaseObject } from '@edx/frontend-platform/utils';
import { getLocale, handleRtl, LOCALE_CHANGED } from '@edx/frontend-platform/i18n';
import siteLanguageList from '../site-language/constants'
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
const LinkedLogo = ({
  href,
  src,
  alt,
  ...attributes
}) => (
  <a href={href} {...attributes}>
    <img className="d-block" src={src} alt={alt} />
  </a>
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const handleChange = async (e) => {
  e.preventDefault();
  const requestConfig = { headers: { 'Content-Type': 'application/merge-patch+json' } };
  const { username, userId } = getAuthenticatedUser();
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

const LearningHeader = ({
  courseOrg, courseNumber, courseTitle, intl, showUserDropdown,
}) => {
  const { authenticatedUser } = useContext(AppContext);

  const headerLogo = (
    <LinkedLogo
      className="logo"
      href={`${getConfig().LMS_BASE_URL}`}
      src={getConfig().LOGO_URL}
      alt={getConfig().SITE_NAME}
    />
  );
  // console.log(getLocale())
  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">{intl.formatMessage(messages.skipNavLink)}</a>
      <div className="container-xl py-2 d-flex align-items-center">
        {headerLogo}
        <div className="flex-grow-1 course-title-lockup" style={{ lineHeight: 1 }}>
          {/* <span className="d-block small m-0">{courseOrg}</span> */}
          <span className="d-block m-0 font-weight-bold course-title">{courseTitle}</span>
        </div>
        <Form.Group controlId="language" className='mt-3'>
        <Form.Control id='language' value={getLocale()} onChange={(e)=>{handleChange(e)}}  name={intl.formatMessage(messages.language)}  as="select" floatingLabel={intl.formatMessage(messages.language)}>
        
       { siteLanguageList.map(({ code, name }) => (<option  value={code}>{name}</option>))}
          </Form.Control>
          </Form.Group>
        {showUserDropdown && authenticatedUser && (
        <AuthenticatedUserDropdown
          username={authenticatedUser.email}
        />
        )}
        {showUserDropdown && !authenticatedUser && (
        <AnonymousUserMenu />
        )}
      </div>
    </header>
  );
};

LearningHeader.propTypes = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export default injectIntl(LearningHeader);
