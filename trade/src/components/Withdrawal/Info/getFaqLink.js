const links = {
  quoine: {
    en: 'https://quoine.zendesk.com/hc/en-us/articles/218199498-What-is-the-daily-withdrawal-limit-for-fiat-and-crypto-currencies-',
    ja: 'https://quoine.zendesk.com/hc/ja/articles/218199498',
  },
  qryptos: {
    en: 'https://qryptos.zendesk.com/hc/en-us/articles/115007862567-Withdrawal-limits',
  },
  traders: {
    en: '',
  },
};

const getFaqLink = (language) => {
  const vendorLinks = links[process.env.REACT_APP_VENDOR];
  return vendorLinks[language] || vendorLinks.en;
};

export default getFaqLink;
