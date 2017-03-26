import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormQuantityDisclose = ({ form, onChange }) => (
  <Field id="qty-disc">
    <NumberInput onChange={onChange} value={form.quantityDisclose} border />
  </Field>
);

OrderEntryFormQuantityDisclose.propTypes = {
  form: React.PropTypes.shape({
    quantityDisclose: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    market: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormQuantityDisclose, 'quantityDisclose');
