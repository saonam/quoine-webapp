import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import Select from '@quoine/components/Select';
import Input from '@quoine/components/Input';
import Hint from '@quoine/components/Hint';

const options = [2, 4, 5, 10, 25].map(level => ({
  value: level, label: `${level}x`,
}));

const OrderEntryFormLeverage = ({ form, onChange }) => (
  <Input
    id="order-entry-leverage"
    label={
      <span>
        {translate('order:leverage')}
        <span>&nbsp;</span>
        <Hint style={{ width: 200, left: -50 }}>{translate('order:leverage-help')}</Hint>
      </span>
      }
  >
    <Select onChange={onChange} value={form.leverage} options={options} />
  </Input>
);

OrderEntryFormLeverage.propTypes = {
  form: React.PropTypes.shape({
    leverage: React.PropTypes.number.isRequired,
    market: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormLeverage, 'leverage');
