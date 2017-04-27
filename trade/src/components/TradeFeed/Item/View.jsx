import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import Time from '@quoine/components/Time';
import BookItem from '@quoine/components/BookItem';
import ColorBySide from '@quoine/components/ColorBySide';

const TradeFeedItem = ({ execution, onClick }) => (
  execution ? (
    <BookItem
      side={execution.takerSide}
      left={(
        <ColorBySide side={execution.takerSide}>
          <Money
            value={execution.quantity}
            currency={execution.baseCurrency}
            noSymbol
          />
        </ColorBySide>
      )}
      center={(
        <Money
          value={execution.price}
          currency={execution.quoteCurrency}
          noSymbol
        />
      )}
      right={(
        <Time value={execution.createdAt} type="time" />
      )}
      onClick={onClick}
    />
  ) : null
);

TradeFeedItem.propTypes = {
  execution: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
    baseCurrency: PropTypes.string.isRequired,
    takerSide: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default TradeFeedItem;
