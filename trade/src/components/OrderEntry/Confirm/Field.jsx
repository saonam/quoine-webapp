import React from 'react';

import Field from '@quoine/components/Field';

import translate from '@quoine/translate';

const OrderEntryConfirmField = ({ id, children }) => (
  <Field
    label={translate(`order:${id}`)}
    layout="justify"
  >
    {children}
  </Field>
);

OrderEntryConfirmField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default OrderEntryConfirmField;
