import PropTypes from 'prop-types';
import React from 'react';

import Enable from './Enable';
import Disable from './Disable';

const TFAGA = ({ tfa, onUpdateTfa, onToggleForm }) => {
  const Body = tfa ? Disable : Enable;
  return (
    <Body onUpdateTfa={onUpdateTfa} onCancel={onToggleForm} />
  );
};

TFAGA.propTypes = {
  tfa: PropTypes.bool.isRequired,
  onUpdateTfa: PropTypes.func.isRequired,
  onToggleForm: PropTypes.func.isRequired,
};

export default TFAGA;
