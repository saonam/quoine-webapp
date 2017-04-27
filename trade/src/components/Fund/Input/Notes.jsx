import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const FundInputNotes = ({ form, onChange }) => (
  <Field label={translate(`fund:${form.account !== 'INR' ? 'notes' : 'transaction-id'}`)}>
    <TextInput
      value={form.notes} onChange={onChange.notes} border
    />
  </Field>
);

FundInputNotes.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default FundInputNotes;
