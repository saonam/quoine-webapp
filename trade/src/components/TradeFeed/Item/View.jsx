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
  execution: React.PropTypes.shape({
    quantity: React.PropTypes.number.isRequired,
    price: React.PropTypes.number.isRequired,
    createdAt: React.PropTypes.number.isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
    baseCurrency: React.PropTypes.string.isRequired,
    takerSide: React.PropTypes.string.isRequired,
  }),
  onClick: React.PropTypes.func.isRequired,
};

export default TradeFeedItem;
