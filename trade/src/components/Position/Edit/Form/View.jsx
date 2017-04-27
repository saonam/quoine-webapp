import PropTypes from 'prop-types';
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
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  position: PropTypes.shape({}).isRequired,
};

export default PositionEditFormView;
