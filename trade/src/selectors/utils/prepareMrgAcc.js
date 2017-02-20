export default (raw) => {
  if (!raw) { return undefined; }

  const position = raw.positionLong + raw.positionShort;
  const pnl = raw.pnlLong + raw.pnlShort;

  return { ...raw, position, pnl };
};
