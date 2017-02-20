import { getTimestamp } from '@quoine/states/utils';

const getStatus = (status) => {
  switch (status) {
    case 'New': return 'live';
    case 'partiallyfilled': return 'live';
    case 'Filled': return 'filled';
    case 'Canceled': return 'cancelled';
    case 'Rejected': return 'rejected';
    default: return status;
  }
};

const updateRaw = ({
  orderID, orderQty, cumQty, timestamp, ordStatus, avgPx,
}) => {
  const order = { id: orderID };
  if (orderQty) { order.quantity = orderQty; }
  if (typeof cumQty === 'number') { order.quantityFilled = cumQty; }
  if (timestamp) { order.updatedAt = getTimestamp(timestamp); }
  if (ordStatus) { order.status = getStatus(ordStatus); }
  if (avgPx) { order.priceAverage = avgPx; }
  return order;
};

const one = (raw) => ({
  ...updateRaw(raw),
  baseCurrency: raw.symbol.slice(0, 3),
  quoteCurrency: raw.currency,
  isFutures: true,
  // ===
  type: raw.ordType.toLowerCase(),
  quantityDisclose: 0,
  side: raw.side.toLowerCase(),
  price: raw.price,
  createdAt: getTimestamp(raw.transactTime),
  leverage: undefined,
  // ===
  account: 'XBT',
  product: raw.symbol,
  market: 'futures',
  // ===
  target: undefined,
  marginUsed: undefined,
  marginInterest: undefined,
  leverageUnwound: undefined,
});

// batch from quoine
// raw here is array of array
// [[model, model], [model], ...]
const load = (raw) => {
  const models = raw.reduce(
    (all, current) => all.concat(current), []
  );
  return ({
    models: models.map(one),
    page: Infinity,
  });
};

// multiple from bitmex
const partial = (raw) => raw.map(one);

// one from bitmex
const update = (raw) => updateRaw(raw[0]);

// one from bitmex
const insert = (raw) => one(raw[0]);

export default { one, load, partial, update, insert };
