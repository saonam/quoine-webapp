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
  onOpen: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
};

export default ChangePasswordView;
