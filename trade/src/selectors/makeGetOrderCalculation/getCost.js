const sellCompare = (price, offerPrice) => (price <= offerPrice);
const buyCompare = (price, offerPrice) => (price >= offerPrice);

const isBuy = (form) => form.side === 'buy';
const isSell = (form) => form.side === 'sell';

const getBid = (orderBook) => orderBook.buys[0][0];
const getAsk = (orderBook) => orderBook.sells[0][0];

const getCostByOrderBook = ({ price, form, orderBook }) => {
  const book = isBuy(form) ? orderBook.sells : orderBook.buys;
  const compareFunc = isBuy(form) ? buyCompare : sellCompare;
  let leftQuantity = form.quantity;
  let taker = 0; let maker = 0;

  // go (taker)
  const length = book.length;
  for (let i = 0; i < length; i += 1) {
    if (leftQuantity <= 0) { break; }
    const [offerPrice, offerQuantity] = book[i];
    if (!compareFunc(price, offerPrice)) { break; }
    taker += Math.min(offerQuantity, leftQuantity) * offerPrice;
    leftQuantity -= offerQuantity;
  }

  // go (maker)
  // "maker" means the loop above is break without finish leftQuantity
  if (leftQuantity > 0) {
    let leftPrice = price;
    if (!isFinite(price) && book.length > 0) {
      // break because of finish order book => should use last price
      leftPrice = book[book.length - 1][0];
    }
    maker = leftQuantity * leftPrice;
  }

  return { taker, maker };
};

const getCostLimit = ({ form, orderBook }) => {
  const price = Number(form.price);
  return getCostByOrderBook({ price, form, orderBook });
};

const getCostMarket = ({ form, orderBook }) => {
  const price = isBuy(form) ? +Infinity : -Infinity;
  return getCostByOrderBook({ price, form, orderBook });
};

const getCostStop = ({ form, orderBook }) => {
  const bid = getBid(orderBook);
  const ask = getAsk(orderBook);
  const price = Number(form.price);
  const quantity = Number(form.quantity);

  if (
    (isBuy(form) && ask < price) ||
    (isSell(form) && bid > price)
  ) {
    return {
      taker: 0,
      maker: price * quantity,
    };
  }

  return getCostMarket({ form, orderBook });
};

const getCostTrailingStop = ({ form, orderBook }) => {
  const bid = getBid(orderBook);
  const ask = getAsk(orderBook);
  const quantity = Number(form.quantity);

  let distance = Number(form.distance);
  if (form.distanceType === 'percentage') {
    const percent = distance / 100;
    distance = isBuy(form) ? (ask * percent) : (bid * percent);
  }

  const price = isBuy(form) ? (ask + distance) : (bid - distance);

  return {
    taker: 0,
    maker: price * quantity,
  };
};

const funcs = {
  limit: getCostLimit,
  market: getCostMarket,
  stop: getCostStop,
  'trailing-stop': getCostTrailingStop,
};

const getCost = ({ form, orderBook }) => {
  if (!orderBook.buys.length || !orderBook.sells.length) {
    return { taker: 0, maker: 0 };
  }

  const func = funcs[form.type];

  return func({ form, orderBook });
};

export default getCost;
