import i18next from 'i18next';
import baseEn from './en-process.env.REACT_APP_VENDOR';
import baseJa from './ja-process.env.REACT_APP_VENDOR';
import baseZhcn from './zhcn-process.env.REACT_APP_VENDOR';
import baseZhtw from './zhtw-process.env.REACT_APP_VENDOR';

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
