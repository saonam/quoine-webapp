import React from 'react';

import Form from '@quoine/components/FormNumberInPlace';

const PositionEditFormView = ({ position, target, onClose, onEdit }) => (
  <Form
    defaultValue={String(position[target])}
    onCancel={onClose}
    onSubmit={onEdit}
  />
);

PositionEditFormView.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  target: React.PropTypes.string.isRequired,
  position: React.PropTypes.shape({}).isRequired,
};

export default PositionEditFormView;
