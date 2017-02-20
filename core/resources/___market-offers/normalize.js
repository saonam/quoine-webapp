export default (raw) => (
  raw.bids.map(item => ([
    Number(item[0]), Number(item[1])
  ]))
);
