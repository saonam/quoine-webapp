import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import SelectInput from '@quoine/components/SelectInput';
import Field from './Field';

const options = [2, 4, 5, 10, 25].map(level => ({
  value: level, label: `${level}x`,
}));

const OrderEntryFormLeverage = ({ form, onChange }) => (
  <Field id="leverage" hintStyle={{ width: 200, left: -50 }}>
    <SelectInput
      onChange={onChange} value={form.leverage}
      options={options} border
    />
  </Field>
);

OrderEntryFormLeverage.propTypes = {
  form: React.PropTypes.shape({
    leverage: React.PropTypes.number.isRequired,
    market: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormLeverage, 'leverage');
