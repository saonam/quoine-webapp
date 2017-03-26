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
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputAmount;
