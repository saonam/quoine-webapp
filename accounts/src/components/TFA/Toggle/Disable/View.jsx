import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import Form from '../Form';

const TFADisableView = ({ open, onToggleOpen, ...others }) => (
  <div>
    {open ? (
      <Form {...others} onCancel={onToggleOpen} />
    ) : (
      <Button onClick={onToggleOpen}>
        {translate('tfa-manage:action-disable')}
      </Button>
    )}
  </div>
);

TFADisableView.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
};

export default TFADisableView;
