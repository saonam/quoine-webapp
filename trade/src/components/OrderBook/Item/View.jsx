import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import BookItem from '@quoine/components/BookItem';

import styles from './styles.css';

const OrderBookItemView = ({ onClick, model, currencies, side, mode }) => {
  const { base, quote } = currencies;
  const { quantity, price, self, cumulativeValue, cumulativePercent } = model;
  const extraValue = mode === 'depth-chart' ? cumulativeValue : self;
  const bg = mode === 'depth-chart' ? cumulativePercent : 0;

  return (
    <BookItem
      side={side}
      left={<Money value={quantity} currency={base} noSymbol />}
      center={<Money value={price} currency={quote} noSymbol />}
      right={extraValue ? (
        <Money value={extraValue} currency={base} noSymbol />
      ) : (
        <span className={styles.dash}>–</span>
      )}
      onClick={onClick}
      bg={bg}
    />
  );
};

OrderBookItemView.propTypes = {
  model: PropTypes.shape({
    quantity: Money.propTypes.value,
    price: Money.propTypes.value,
    self: PropTypes.number,
    cumulativeValue: PropTypes.number,
    cumulativePercent: PropTypes.number,
  }).isRequired,
  currencies: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired,
  }).isRequired,
  side: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['normal', 'depth-chart']).isRequired,
};

export default OrderBookItemView;
