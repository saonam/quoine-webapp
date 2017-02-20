import futuresNormalize from
  'states/orderBlotter/saga/resources/bitmex/normalize';
import cashNormalize from
  'states/orderBlotter/saga/resources/quoine/normalize';

export const futuresBody = (order) => ({
  order: {
    side: order.side,
    price: order.price || '',
    quantity: order.quantity,
    type: order.type,
  },
});

export const futuresResponse = futuresNormalize.one;

export const cashBody = (raw) => {
  // common
  const order = {
    order_type: raw.type.replace('-', '_'),
    product_id: raw.productId,
    side: raw.side,
    quantity: raw.quantity,
  };

  // disclose quantity
  if (
    raw.type === 'limit' &&
    raw.quantityDisclose !== raw.quantity &&
    raw.quantityDisclose !== 0
  ) {
    order.disc_quantity = raw.quantityDisclose;
  }

  // custom price for stop and limit
  if (['limit', 'stop'].indexOf(raw.type) !== -1) {
    order.price = raw.price;
  }

  // margin
  if (raw.market === 'margin') {
    order.leverage_level = raw.leverage;
    order.funding_currency = raw.account;
    order.order_direction = raw.direction.replace('-', '_');
  }

  // slippage
  // if (
  //   shouldShowSlippage(form) &&
  //   orderUtils.isSlippage(form)
  // ) {
  //   order.orderType = 'market_with_range';
  //   order.priceRange = form.slippageValue;
  // }

  // trailing stop
  if (raw.type === 'trailing-stop') {
    order.trailing_stop_type = raw.trailingStopType;
    order.trailing_stop_value = raw.trailingStopValue;
  }

  return { order };
};

export const cashResponse = cashNormalize.one;
