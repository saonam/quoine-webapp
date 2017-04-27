import PropTypes from 'prop-types';
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
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TokenAdd;
