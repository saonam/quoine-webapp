import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';

const FundInputBank = ({ form, onChange }) => (
  <Input id="fund-bank" label={translate('fund:bank')}>
    <TextBox autoFocus value={form.bank} onChange={onChange.bank} required />
  </Input>
);

FundInputBank.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputBank;
