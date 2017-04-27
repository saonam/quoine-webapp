import PropTypes from 'prop-types';
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
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccountDetailMargin;
