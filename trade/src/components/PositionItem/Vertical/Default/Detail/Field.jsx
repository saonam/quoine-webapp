import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const ExecutionItemDetailField = ({ id, children }) => (
  <Field label={translate(`position:${id}`)} layout="inline">
    {children}
  </Field>
);

ExecutionItemDetailField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default ExecutionItemDetailField;
