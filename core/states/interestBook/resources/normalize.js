const one = (raw) => (
  raw.bids.map(level => ([
    Number(level[0]),
    Number(level[1]),
  ]))
);

export default (raw) => {
  const response = {};
  raw.forEach(book => {
    response[book.currency] = one(book);
  });
  return response;
};
