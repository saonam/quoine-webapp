import { quoine } from '@quoine/resources';

let tradingTemp;

export const get = () => {
  return quoine.get('/users/web_app_setting')
  .then(raw => {
    const settings = JSON.parse(raw.web_app_setting);
    // trading settings is very different from qryptos and quoine
    // https://app.asana.com/0/inbox/318261701576501/351525304482054/356124680044251
    if (process.env.REACT_APP_VENDOR === 'qryptos') {
      tradingTemp = Object.assign({}, settings.trading);
      settings.trading = settings.tradingQryptos || {};
    }

    return settings;
  })
};

export const set = settings => {
  if (process.env.REACT_APP_VENDOR === 'qryptos') {
    settings.tradingQryptos = settings.trading;
    settings.trading = Object.assign({}, tradingTemp);
  }

  return quoine.put('/users/web_app_setting', {
    body: {
      web_app_setting: JSON.stringify(settings),
    },
  })
};
