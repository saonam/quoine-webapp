import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormPrice = ({ form, onChange }) => (
  <Field id="price">
    <NumberInput onChange={onChange} value={form.price} border />
  </Field>
);

OrderEntryFormPrice.propTypes = {
  form: PropTypes.shape({
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormPrice, 'price');
