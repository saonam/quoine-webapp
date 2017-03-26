import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const TransactionItemField = ({ id, children }) => (
  <Field label={translate(`trans:${id}`)} layout="inline">
    {children}
  </Field>
);

TransactionItemField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default TransactionItemField;
