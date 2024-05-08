import { AsyncActionType } from '../data/utils';
export var FETCH_SITE_LANGUAGES = new AsyncActionType('SITE_LANGUAGE', 'FETCH_SITE_LANGUAGES');
export var fetchSiteLanguages = function fetchSiteLanguages(handleNavigation) {
  return {
    type: FETCH_SITE_LANGUAGES.BASE,
    payload: {
      handleNavigation: handleNavigation
    }
  };
};
export var fetchSiteLanguagesBegin = function fetchSiteLanguagesBegin() {
  return {
    type: FETCH_SITE_LANGUAGES.BEGIN
  };
};
export var fetchSiteLanguagesSuccess = function fetchSiteLanguagesSuccess(siteLanguageList) {
  return {
    type: FETCH_SITE_LANGUAGES.SUCCESS,
    payload: {
      siteLanguageList: siteLanguageList
    }
  };
};
export var fetchSiteLanguagesFailure = function fetchSiteLanguagesFailure(error) {
  return {
    type: FETCH_SITE_LANGUAGES.FAILURE,
    payload: {
      error: error
    }
  };
};
export var fetchSiteLanguagesReset = function fetchSiteLanguagesReset() {
  return {
    type: FETCH_SITE_LANGUAGES.RESET
  };
};
//# sourceMappingURL=actions.js.map