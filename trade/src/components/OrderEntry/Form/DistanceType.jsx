import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import Select from '@quoine/components/Select';
import Input from '@quoine/components/Input';

const rawOptions = ['fiat', 'percentage'];

const getOptions = () => (
  rawOptions.map(type => ({
    value: type, label: translate(`order:distance-type-${type}`),
  }))
);

const OrderEntryFormDistanceType = ({ form, onChange }) => (
  <Input
    id="order-entry-distance-type" label={translate('order:distance-type')}
  >
    <Select
      onChange={onChange} value={form.distanceType} options={getOptions()}
    />
  </Input>
);

OrderEntryFormDistanceType.propTypes = {
  form: React.PropTypes.shape({
    distanceType: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDistanceType, 'distanceType');
