import React from 'react';

import Money from '@quoine/components/Money';
import BookItem from '@quoine/components/BookItem';

import styles from './styles.css';

const OrderBookItemView = ({ onClick, model, currencies, side }) => {
  const { base, quote } = currencies;
  const { quantity, price, self } = model;
  return (
    <BookItem
      side={side}
      left={<Money value={quantity} currency={base} noSymbol />}
      center={<Money value={price} currency={quote} noSymbol />}
      right={self ? (
        <Money value={self} currency={base} noSymbol />
      ) : (
        <span className={styles.light}>–</span>
      )}
      onClick={onClick}
    />
  );
};

OrderBookItemView.propTypes = {
  model: React.PropTypes.shape({
    quantity: Money.propTypes.value,
    price: Money.propTypes.value,
    self: React.PropTypes.number,
  }).isRequired,
  currencies: React.PropTypes.shape({
    quote: React.PropTypes.string.isRequired,
    base: React.PropTypes.string.isRequired,
  }).isRequired,
  side: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default OrderBookItemView;
