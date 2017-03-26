import React from 'react';

import translate from '@quoine/translate';

import AccountSelect from '@quoine/components/AccountSelect';
import Field from '@quoine/components/Field';

const TransactionBlotterAccountSelect = ({ account, onChange }) => (
  <Field label={translate('trans:account')} layout="inline">
    <AccountSelect value={account} onChange={onChange} />
  </Field>
);

TransactionBlotterAccountSelect.propTypes = {
  account: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default TransactionBlotterAccountSelect;
