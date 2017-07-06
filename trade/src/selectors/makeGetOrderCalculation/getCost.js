// if stop order => reverse side before calculating
const getSide = (form) => {
  if (form.type !== 'stop') { return form.side; }
  return form.side === 'buy' ? 'sell' : 'buy';
};

const sellCompare = (price, offerPrice) => (price <= offerPrice);

const buyCompare = (price, offerPrice) => (price >= offerPrice);

const getCostByOrderBook = ({ form: orgForm, orderBook }) => {
  // create form for calculation
  const form = { ...orgForm };
  form.side = getSide(form);

  // ready ===
  const isBuy = form.side === 'buy';

  // set
  let price = Number(form.price);
  if (form.type === 'market') {
    price = isBuy ? +Infinity : -Infinity;
  }
  const book = isBuy ? orderBook.sells : orderBook.buys;
  const compareFunc = isBuy ? buyCompare : sellCompare;
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

export default getCostByOrderBook;
