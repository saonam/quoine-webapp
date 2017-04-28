const apps = ['accounts', 'trade', 'lend', 'bttrader'];
const envs = ['stag', 'sandbox', 'beta', 'next'];
const domains = ['quoine', 'quoinex', 'qryptos', 'min-btc'];

const validPrefixs = [];
apps.forEach(app => {
  [''].concat(envs).forEach(env => {
    domains.forEach(domain => {
      validPrefixs.push(`https://${app}${env ? `-${env}` : ''}.${domain}.com`);
    });
  });
});

const validateUrl = (url) => (
  (
    !!url &&
    // eslint-disable-next-line no-script-url
    url.toLowerCase().indexOf('javascript:') === -1 &&
    url.toLowerCase().indexOf('data:') === -1 &&
    url.toLowerCase().indexOf('vbscript:') === -1 &&
    validPrefixs.some(prefix => url.indexOf(prefix) !== -1)
  ) ? url : process.env.REACT_APP_TRADE_HOST
);

export default validateUrl;
