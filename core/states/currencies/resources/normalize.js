export const all = raws => raws.map(raw => ({
  code: raw.currency,
  type: raw.currency_type,
  // ===
  withdrawalMinimum: Number(raw.minimum_withdrawal),
  withdrawalFee: Number(raw.withdrawal_fee),
  withdrawalFeeMinimum: Number(raw.minimum_fee),
}));
// .concat({
//   // add XBT currency
//   code: 'XBT',
//   type: 'crypto',
//   // ===
//   withdrawalMinimum: 0,
//   withdrawalFee: 0,
//   withdrawalFeeMinimum: 0,
// });

export const funding = raw => raw.value;
