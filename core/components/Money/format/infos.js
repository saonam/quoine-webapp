// JPY, IDR, INR, PHP
const fiatLong = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})).format;

// rest of fiat
const fiat = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})).format;

// BTC, ETH, etc...
const crypto = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 5,
  maximumFractionDigits: 5,
})).format;

// XBJ
const contract = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})).format;

const percent = (new Intl.NumberFormat('en', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})).format;

const percentRate = (new Intl.NumberFormat('en', {
  style: 'percent',
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
})).format;

const fxRate = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})).format;

// the most precise one, often use to compare
const full = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 8,
  maximumFractionDigits: 8,
  useGrouping: false,
})).format;

export default {
  AUD: {
    format: fiat,
    symbol: '$',
    split: false,
  },
  CNY: {
    format: fiat,
    symbol: '¥',
    split: false,
  },
  EUR: {
    format: fiat,
    symbol: '€',
    split: false,
  },
  HKD: {
    format: fiat,
    symbol: '$',
    split: false,
  },
  SGD: {
    format: fiat,
    symbol: '$',
    split: false,
  },
  USD: {
    format: fiat,
    symbol: '$',
    split: false,
  },
  IDR: {
    format: fiatLong,
    symbol: 'Rp',
    split: false,
  },
  INR: {
    format: fiatLong,
    symbol: '₹',
    split: false,
  },
  JPY: {
    format: fiatLong,
    symbol: '¥',
    split: false,
  },
  PHP: {
    format: fiatLong,
    symbol: '₱',
    split: false,
  },
  // ===
  BTC: {
    format: crypto,
    symbol: '฿',
    split: true,
  },
  XBT: {
    format: crypto,
    symbol: '฿',
    split: true,
  },
  ETH: {
    format: crypto,
    symbol: 'Ξ',
    split: true,
  },
  ETC: {
    format: crypto,
    symbol: 'Ξ',
    split: true,
  },
  // ===
  LTC: {
    format: crypto,
    symbol: 'Ł',
    split: true,
  },
  XRP: {
    format: crypto,
    symbol: 'ρ',
    split: true,
  },
  XMR: {
    format: crypto,
    symbol: 'ɱ',
    split: true,
  },
  XEM: {
    format: crypto,
    symbol: 'ν',
    split: true,
  },
  FCT: {
    format: crypto,
    symbol: 'φ',
    split: true,
  },
  REP: {
    format: crypto,
    symbol: 'α',
    split: true,
  },
  ZEC: {
    format: crypto,
    symbol: 'ζ',
    split: true,
  },
  // ===
  XBJ: {
    format: contract,
    symbol: '',
    split: false,
  },
  // ===
  percent: {
    format: percent,
    symbol: '',
    split: false,
  },
  percentRate: {
    format: percentRate,
    symbol: '',
    split: false,
  },
  // ===
  fxRate: {
    format: fxRate,
    symbol: '',
    split: false,
  },
  // ===
  full: {
    format: full,
    symbol: '',
    split: false,
  },
};
