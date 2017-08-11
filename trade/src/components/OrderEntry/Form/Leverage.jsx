import { withBoth } from 'components/OrderEntry/utils';

import PropTypes from 'prop-types';

import React from 'react';
import SelectInput from '@quoine/components/SelectInput';
import Field from './Field';


let options = [2, 4, 5, 10, 25].map(level => ({
  value: level, label: `${level}x`,
}));
const optionsCorpPTE = [2, 4, 5, 10, 25, 50].map(level => ({
  value: level, label: `${level}x`,
}));

const OrderEntryFormLeverage = ({ form, onChange, user }) => {
  // allow CORP PTE users trade with a leverage of 50
  // only apply for Quoinex
  if (
    process.env.REACT_APP_VENDOR === 'quoine' &&
    !user.underJFSA && user.type === 'corporate'
  ) {
    options = optionsCorpPTE;
  }

  return (
    <Field
      id="leverage"
      hintStyle={{ width: 200, left: -50 }}
    >
      <SelectInput
        onChange={onChange} value={form.leverage}
        options={options} border
      />
    </Field>
  );
};

OrderEntryFormLeverage.propTypes = {
  user: PropTypes.shape({
    underJFSA: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    leverage: PropTypes.number.isRequired,
    market: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormLeverage, 'leverage');
