import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBoxNumber from '@quoine/components/TextBoxNumber';

const FundInputAmount = ({ form, onChange }) => (
  <Input id="fund-amount" label={translate('fund:amount')}>
    <TextBoxNumber value={form.amount} onChange={onChange.amount} required />
  </Input>
);

FundInputAmount.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputAmount;
