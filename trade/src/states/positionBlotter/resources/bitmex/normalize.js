import { getTimestamp } from '@quoine/states/utils';

const updateRaw = (raw) => {
  const position = { id: `${raw.account}${raw.symbol}` };
  // ===
  if (raw.quoteCurrency) {
    position.quoteCurrency = raw.quoteCurrency;
  }
  if (typeof raw.crossMargin === 'boolean') {
    position.cross = raw.crossMargin;
  }
  if (raw.leverage) {
    position.leverage = raw.leverage;
  }
  // ===
  if (raw.currentQty) {
    position.quantity = raw.currentQty;
    position.quantityOpen = raw.currentQty;
  }
  // ===
  if (raw.avgEntryPrice) {
    position.priceOpen = raw.avgEntryPrice;
  }
  if (raw.markPrice) {
    position.priceMark = raw.markPrice;
  }
  if (raw.liquidationPrice) {
    position.priceLiquidation = raw.liquidationPrice;
  }
  // ===
  if (raw.posMargin) {
    position.margin = raw.posMargin / 1e8;
  }
  if (raw.homeNotional) {
    position.value = raw.homeNotional;
  }
  if (raw.unrealisedPnl) {
    position.pnlClose = raw.unrealisedPnl / 1e8;
  }
  if (raw.realisedPnl) {
    position.pnlOpen = raw.realisedPnl / 1e8;
  }
  // ===
  if (raw.openingTimestamp) {
    position.createdAt = getTimestamp(raw.openingTimestamp);
  }
  if (raw.timestamp) {
    position.updatedAt = getTimestamp(raw.timestamp);
  }
  // ===
  return position;
};

const one = (raw) => (
  Object.assign({}, updateRaw(raw), {
    account: 'XBT',
    product: raw.symbol,
    // XBJ
    baseCurrency: raw.symbol.slice(0, 3),
    underlyingCurrency: 'XBT',
    side: 'all',
    status: 'open',
    market: 'futures',
    // ===
    priceClose: 0,
    quantityClose: 0,
  })
);

// multiple from bitmex
const partial = (raw) => raw.map(one);

// one from bitmex
const update = (raw) => updateRaw(raw[0]);

// one from bitmex
const insert = (raw) => one(raw[0]);

export default { partial, update, insert };
