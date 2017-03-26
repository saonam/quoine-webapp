import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const AccountDetailMargin = ({ id, children }) => (
  <Field
    label={translate(`account:${id}`)}
    layout="justify"
  >
    {children}
  </Field>
);

AccountDetailMargin.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default AccountDetailMargin;
