import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import Select from '@quoine/components/Select';
import Input from '@quoine/components/Input';
import Hint from '@quoine/components/Hint';

const rawOptions = ['one-direction', 'two-direction', 'netout'];

const getOptions = () => (
  rawOptions.map(type => ({
    value: type, label: translate(`order:direction-${type}`),
  }))
);

const OrderEntryFormDirection = ({ form, onChange }) => (
  <Input
    id="order-entry-direction"
    label={
      <span>
        {translate('order:direction')}
        <span>&nbsp;</span>
        <Hint style={{ width: 200, left: -100 }}>{translate('order:direction-help')}</Hint>
      </span>
    }
  >
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
