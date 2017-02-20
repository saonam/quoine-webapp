import React from 'react';

import Form from '@quoine/components/FormNumberInPlace';

const PositionCloseFormView = ({ position, onClose, onUpdate }) => (
  <Form
    defaultValue={String(position.quantityOpen)}
    onCancel={onClose}
    onSubmit={onUpdate}
  />
);

PositionCloseFormView.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  position: React.PropTypes.shape({}).isRequired,
};

export default PositionCloseFormView;
