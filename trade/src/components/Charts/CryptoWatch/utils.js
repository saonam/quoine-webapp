export const getOrigin = (market) => {
  if (process.env.REACT_APP_VENDOR === 'qryptos') {
    return 'qryptos';
  }

  return market === 'futures' ? 'bitmex' : 'quoine';
};

export const getChartName = (symbol) => {
  switch (symbol) {
    // Bitmex symbols
    case 'XBJH17': return '';
    // QUOINE symbols
    // BTCUSD => btcusd
    default: return symbol.toLowerCase();
  }
};

export const getLanguage = (language) => {
  switch (language) {
    case 'ja': return 'ja-JP';
    case 'zhcn': return 'zh-CN';
    case 'zhtw': return 'zh-CN';
    case 'en':
    default: return 'en';
  }
};
