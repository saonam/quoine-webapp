import { withBoth } from 'components/OrderEntry/utils';

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
      onChange={onChange} value={form.distanceType}
      options={getOptions()} border
    />
  </Field>
);

OrderEntryFormDistanceType.propTypes = {
  form: React.PropTypes.shape({
    distanceType: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDistanceType, 'distanceType');
