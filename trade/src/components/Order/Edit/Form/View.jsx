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
  onClose: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  target: React.PropTypes.string.isRequired,
  order: React.PropTypes.shape({}).isRequired,
};

export default OrderEditFormView;
