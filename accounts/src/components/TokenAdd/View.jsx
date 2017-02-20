import React from 'react';

import Button from './Button';
import Form from './Form';

const TokenAdd = ({ open, onOpen, onClose }) => (
  open ? (
    <Form onCancel={onClose} />
  ) : (
    <Button onOpen={onOpen} />
  )
);

TokenAdd.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onOpen: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default TokenAdd;
