import PropTypes from 'prop-types';
import React from 'react';

import Enable from './Enable';
import Disable from './Disable';

const TFAGA = ({ tfa, onToggleTfa }) => {
  const Body = tfa ? Disable : Enable;
  return (
    <Body onToggleTfa={onToggleTfa} />
  );
};

TFAGA.propTypes = {
  tfa: PropTypes.bool.isRequired,
  onToggleTfa: PropTypes.func.isRequired,
};

export default TFAGA;
