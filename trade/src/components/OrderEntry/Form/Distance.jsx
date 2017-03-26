import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormDistance = ({ form, onChange }) => (
  <Field id="distance">
    <NumberInput onChange={onChange} value={form.distance} border />
  </Field>
);

OrderEntryFormDistance.propTypes = {
  form: React.PropTypes.shape({
    distance: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDistance, 'distance');
