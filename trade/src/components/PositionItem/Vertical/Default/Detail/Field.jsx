import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const ExecutionItemDetailField = ({ id, children }) => (
  <Field label={translate(`position:${id}`)} layout="inline">
    {children}
  </Field>
);

ExecutionItemDetailField.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExecutionItemDetailField;
