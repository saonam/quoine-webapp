import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const WithdrawalItemDetailField = ({ id, currency, children }) => (
  <Field label={translate(`withdrawal:${id}`, { currency })} layout="inline">
    {children}
  </Field>
);

WithdrawalItemDetailField.propTypes = {
  id: React.PropTypes.string.isRequired,
  currency: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default WithdrawalItemDetailField;
