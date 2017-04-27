import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from './Field';

const rawOptions = ['fiat', 'percentage'];

const getOptions = () => (
  rawOptions.map(type => ({
    value: type, label: translate(`order:distance-type-${type}`),
  }))
);

const OrderEntryFormDistanceType = ({ form, onChange }) => (
  <Field id="distance-type">
    <SelectInput
      onChange={onChange}
      value={form.distanceType}
      options={getOptions()}
      border
    />
  </Field>
);

OrderEntryFormDistanceType.propTypes = {
  form: PropTypes.shape({
    distanceType: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDistanceType, 'distanceType');
