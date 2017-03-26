import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const FundInputBank = ({ form, onChange }) => (
  <Field label={translate('fund:bank')}>
    <TextInput
      value={form.bank} onChange={onChange.bank}
      autoFocus border required
    />
  </Field>
);

FundInputBank.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputBank;
