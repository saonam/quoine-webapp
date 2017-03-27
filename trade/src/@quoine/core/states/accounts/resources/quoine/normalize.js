const overview = (raw) => ({
  currency: raw.currency,
  type: raw.currency_type,
  isFutures: false,
  // ===
  balance: Number(raw.balance),
  // will be set later by detail and pusher
  pnl: 0,
  // will be set later by detail and pusher
  marginAvailable: Number(raw.balance),
  // ===
  loanOffers: Number(raw.outstanding_loan_offers),
  loaned: Number(raw.loaned_out),
  loanedInterest: Number(raw.interest_earned),
  // ===
  fxRate: raw.exchange_rate ? Number(raw.exchange_rate) : null,
});

export const add = raw => ({
  currency: raw.currency,
  type: raw.currency_type,
  isFutures: false,
  // ===
  balance: 0,
  pnl: 0,
  marginAvailable: 0,
  loanOffers: 0,
  loaned: 0,
  loanedInterest: 0,
});

// return when load detail and pusher
export const detail = raw => ({
  currency: raw.currency,
  // ===
  balance: Number(raw.balance),
  pnl: Number(raw.pnl),
  marginAvailable: Number(raw.free_margin),
});

export const all = raw => (
  []
  .concat(raw.fiat_accounts, raw.crypto_accounts)
  .map(overview)
);
