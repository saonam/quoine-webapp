import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import NumberInput from '@quoine/components/NumberInput';
import Field from 'components/Transfer/Field';

const FundInputAmount = ({ form, onChange }) => (
  <Field label={translate('fund:amount')}>
    <NumberInput
      value={form.amount} onChange={onChange.amount}
      border required
    />
  </Field>
);

FundInputAmount.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default FundInputAmount;
