import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from '@quoine/components/TransitionGroup';

import Item from 'components/OrderBook/Item';

const OrderBookList = ({ models, currencies, side }) => {
  if (!currencies) { return null; }

  const elements = models.map(model => (
    <Item
      key={model.id} model={model} side={side} currencies={currencies}
    />
  ));

  return (
    <TransitionGroup>
      {elements}
    </TransitionGroup>
  );
};

OrderBookList.propTypes = {
  models: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  currencies: PropTypes.shape({}),
  side: PropTypes.string.isRequired,
};

export default OrderBookList;
