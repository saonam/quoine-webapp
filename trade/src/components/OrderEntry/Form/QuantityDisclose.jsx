import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormQuantityDisclose = ({ form, onChange }) => (
  <Field id="qty-disc">
    <NumberInput onChange={onChange} value={form.quantityDisclose} border />
  </Field>
);

OrderEntryFormQuantityDisclose.propTypes = {
  form: PropTypes.shape({
    quantityDisclose: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    market: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormQuantityDisclose, 'quantityDisclose');
