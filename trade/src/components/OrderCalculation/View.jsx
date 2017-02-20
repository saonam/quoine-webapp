import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const OrderEntryCalculator = ({ calculation }) => (
  <div>
    {calculation.map(item => (
      <Info
        key={item.name}
        label={translate(`order:${item.name}`, item.info)}
      >
        <ColorFlashing value={item.value}>
          {item.currency ? (
            <Money value={item.value} currency={item.currency} />
          ) : '–'}
        </ColorFlashing>
      </Info>
    ))}
  </div>
);

OrderEntryCalculator.propTypes = {
  calculation: React.PropTypes.arrayOf(React.PropTypes.shape({
    currency: React.PropTypes.string,
    value: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default OrderEntryCalculator;
