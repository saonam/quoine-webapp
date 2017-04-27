import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from './Field';

const rawOptions = ['one-direction', 'two-direction', 'netout'];

const getOptions = () => (
  rawOptions.map(type => ({
    value: type, label: translate(`order:direction-${type}`),
  }))
);

const OrderEntryFormDirection = ({ form, onChange }) => (
  <Field id="direction" hintStyle={{ width: 200, left: -130 }}>
    <SelectInput
      onChange={onChange} value={form.direction}
      options={getOptions()} border
    />
  </Field>
);

OrderEntryFormDirection.propTypes = {
  form: PropTypes.shape({
    direction: PropTypes.string.isRequired,
    market: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDirection, 'direction');
