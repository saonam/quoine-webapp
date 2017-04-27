import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';

import NumberInput from '@quoine/components/NumberInput';
import Field from './Field';

const OrderEntryFormDistance = ({ form, onChange }) => (
  <Field id="distance">
    <NumberInput onChange={onChange} value={form.distance} border />
  </Field>
);

OrderEntryFormDistance.propTypes = {
  form: PropTypes.shape({
    distance: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDistance, 'distance');
