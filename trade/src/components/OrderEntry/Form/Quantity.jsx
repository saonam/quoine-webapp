import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormQuantity = ({ form, onChange }) => (
  <Field id="quantity">
    <NumberInput onChange={onChange} value={form.quantity} border />
  </Field>
);

OrderEntryFormQuantity.propTypes = {
  form: React.PropTypes.shape({
    quantity: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormQuantity, 'quantity');
