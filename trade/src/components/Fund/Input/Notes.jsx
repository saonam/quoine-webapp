import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';

const FundInputNotes = ({ form, onChange }) => (
  <Input
    id="fund-notes"
    label={translate(`fund:${
      form.account !== 'INR' ? 'notes' : 'transaction-id'
    }`)}
  >
    <TextBox value={form.notes} onChange={onChange.notes} />
  </Input>
);

FundInputNotes.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputNotes;
