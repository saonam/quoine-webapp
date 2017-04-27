import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const OrderItemDetailField = ({ id, children }) => (
  <Field label={translate(`order:${id}`)} layout="inline">
    {children}
  </Field>
);

OrderItemDetailField.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default OrderItemDetailField;
