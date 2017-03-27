export const BASE_ACCOUNT = {
  currency: 'XBT',
  type: 'crypto',
  isFutures: true,
  // ===
  balance: 0,
  pnl: 0,
  marginAvailable: 0,
  // ===
  loanOffers: 0,
  loaned: 0,
  loanedInterest: 0,
  // futures
  pnlUnrealised: 0,
  pnlRealised: 0,
  marginWithdrawable: 0,
};

export const update = (raws) => {
  const raw = raws[0];
  const account = {
    currency: 'XBT',
  };
  if (typeof raw.walletBalance === 'number') {
    account.balance = raw.walletBalance / 1e8;
  }
  if (typeof raw.withdrawableMargin === 'number') {
    account.marginWithdrawable = raw.withdrawableMargin / 1e8;
    account.marginAvailable = account.marginWithdrawable;
  }
  if (typeof raw.realisedPnl === 'number') {
    account.pnlRealised = raw.realisedPnl / 1e8;
  }
  if (typeof raw.unrealisedPnl === 'number') {
    account.pnlUnrealised = raw.unrealisedPnl / 1e8;
    account.pnl = account.pnlUnrealised;
  }
  return account;
};
