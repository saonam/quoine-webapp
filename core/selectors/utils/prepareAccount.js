const prepareAccount = (raw) => {
  if (!raw) { return undefined; }

  const equity = raw.balance + raw.pnl;
  const marginUsed = equity - raw.marginAvailable;
  // maybe infinite
  const marginCoverage = equity / marginUsed;
  const fundType = raw.isFutures ? 'futures' : raw.type;
  return ({
    ...raw,
    equity,
    marginUsed,
    marginCoverage,
    fundType,
  });
};

export default prepareAccount;
