import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const OrderEntryCalculator = ({ calculation }) => (
  <div>
    {calculation.map(item => (
      <Field
        key={item.name}
        label={translate(`order:${item.name}`, item.info)}
        layout="justify"
      >
        <ColorFlashing value={item.value}>
          {item.currency ? (
            <Money value={item.value} currency={item.currency} />
          ) : '–'}
        </ColorFlashing>
      </Field>
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
