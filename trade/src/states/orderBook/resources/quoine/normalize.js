const formatBook = (book) => (
  book.map(level => ([
    Number(level[0]),
    Number(level[1]),
  ]))
);

const load = (raw) => ({
  buys: formatBook(raw.buy_price_levels),
  sells: formatBook(raw.sell_price_levels),
});

const update = (raw, side) => ({
  [`${side}s`]: formatBook(raw),
});

export default { load, update };
