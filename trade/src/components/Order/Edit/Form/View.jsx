import PropTypes from 'prop-types';
import React from 'react';

import Form from '@quoine/components/FormNumberInPlace';

const OrderEditFormView = ({ order, target, onClose, onEdit }) => (
  <Form
    defaultValue={String(order[target])}
    onCancel={onClose}
    onSubmit={onEdit}
  />
);

OrderEditFormView.propTypes = {
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  order: PropTypes.shape({}).isRequired,
};

export default OrderEditFormView;
