import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormQuantity = ({ form, onChange }) => (
  <Field id="quantity">
    <NumberInput onChange={onChange} value={form.quantity} border />
  </Field>
);

OrderEntryFormQuantity.propTypes = {
  form: PropTypes.shape({
    quantity: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormQuantity, 'quantity');
