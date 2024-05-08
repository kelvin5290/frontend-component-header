import { createSelector } from 'reselect';
import { getModuleState } from '../data/utils';
export var storePath = ['accountSettings', 'siteLanguage'];
var siteLanguageSelector = function siteLanguageSelector(state) {
  return getModuleState(state, storePath);
};
export var siteLanguageListSelector = createSelector(siteLanguageSelector, function (siteLanguage) {
  return siteLanguage.siteLanguageList;
});
export var siteLanguageOptionsSelector = createSelector(siteLanguageSelector, function (siteLanguage) {
  return siteLanguage.siteLanguageList.map(function (_ref) {
    var code = _ref.code,
      name = _ref.name;
    return {
      value: code,
      label: name
    };
  });
});
//# sourceMappingURL=selectors.js.map