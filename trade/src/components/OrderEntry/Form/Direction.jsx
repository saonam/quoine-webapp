import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import Select from '@quoine/components/Select';
import Input from '@quoine/components/Input';

const rawOptions = ['one-direction', 'two-direction', 'netout'];

const getOptions = () => (
  rawOptions.map(type => ({
    value: type, label: translate(`order:direction-${type}`),
  }))
);

const OrderEntryFormDirection = ({ form, onChange }) => (
  <Input id="order-entry-direction" label={translate('order:direction')}>
    <Select
      onChange={onChange} value={form.direction} options={getOptions()}
    />
  </Input>
);

OrderEntryFormDirection.propTypes = {
  form: React.PropTypes.shape({
    direction: React.PropTypes.string.isRequired,
    market: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDirection, 'direction');
