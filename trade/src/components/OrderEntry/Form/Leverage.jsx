import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';
import SelectInput from '@quoine/components/SelectInput';
import Field from './Field';

const options = [2, 4, 5, 10, 25].map(level => ({
  value: level, label: `${level}x`,
}));

const OrderEntryFormLeverage = ({ form, onChange }) => (
  <Field
    id="leverage"
    hintStyle={{ width: 200, left: -50 }}
    // modalContent={<ModalContent />}
  >
    <SelectInput
      onChange={onChange} value={form.leverage}
      options={options} border
    />
  </Field>
);

OrderEntryFormLeverage.propTypes = {
  form: PropTypes.shape({
    leverage: PropTypes.number.isRequired,
    market: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormLeverage, 'leverage');
