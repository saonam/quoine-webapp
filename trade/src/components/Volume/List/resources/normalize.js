export default (raw) => (
  raw.currencies.map(
    (currency, index) => ({
      account: currency,
      value: raw.transacted_volumes[index],
    })
  )
);
