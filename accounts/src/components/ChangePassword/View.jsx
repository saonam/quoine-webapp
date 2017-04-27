import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import Form from './Form';

const ChangePasswordView = ({ open, onOpen, onClose }) => (
  open ? (
    <Form onClose={onClose} />
  ) : (
    <Button styleName="accent text inline" onClick={onOpen}>
      {translate('change-password:title')}
    </Button>
  )
);

ChangePasswordView.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ChangePasswordView;
