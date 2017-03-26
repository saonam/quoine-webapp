import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormPrice = ({ form, onChange }) => (
  <Field id="price">
    <NumberInput onChange={onChange} value={form.price} border />
  </Field>
);

OrderEntryFormPrice.propTypes = {
  form: React.PropTypes.shape({
    price: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormPrice, 'price');
