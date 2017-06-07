import PropTypes from 'prop-types';
import React from 'react';

import Form from './Form';
import Disable from './Disable';

const TFAToggle = ({ action, ...others }) => {
  const Body = action === 'enable' ? Form : Disable;
  return (
    <Body action={action} {...others} />
  );
};

TFAToggle.propTypes = {
  action: PropTypes.oneOf(['enable', 'disable']).isRequired,
};

export default TFAToggle;
