import i18next from 'i18next';
import baseEn from './en';
import baseJa from './ja';
import baseZhcn from './zhcn';
import baseZhtw from './zhtw';

// TODO: list of languages should be dynamic
export const init = (resources) => {
  i18next.init({
    lng: 'en',
    resources: {
      en: { ...baseEn, ...resources.en },
      ja: { ...baseJa, ...resources.ja },
      zhcn: { ...baseZhcn, ...resources.zhcn },
      zhtw: { ...baseZhtw, ...resources.zhtw },
    },
    // debug: true,
  });
};

export const changeLanguage = i18next.changeLanguage.bind(i18next);

export default i18next.t.bind(i18next);
