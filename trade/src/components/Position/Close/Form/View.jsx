import PropTypes from 'prop-types';
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
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  position: PropTypes.shape({}).isRequired,
};

export default PositionCloseFormView;
