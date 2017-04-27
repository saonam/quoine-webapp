import PropTypes from 'prop-types';
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
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default FundInputBank;
