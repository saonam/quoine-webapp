import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const OrderItemDetailField = ({ id, children }) => (
  <Field label={translate(`order:${id}`)} layout="inline">
    {children}
  </Field>
);

OrderItemDetailField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default OrderItemDetailField;
