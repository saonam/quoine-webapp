export default (raw) => ({
  buys: raw[0].bids.slice(0, 10),
  sells: raw[0].asks.slice(0, 10),
});
