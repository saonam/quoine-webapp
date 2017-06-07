import PropTypes from 'prop-types';
import React from 'react';

import Toggle from 'components/TFA/Toggle';

const TFAGADisable = ({ onToggleTfa }) => (
  <Toggle
    app="ga" action="disable"
    onToggleTfa={onToggleTfa}
  />
);

TFAGADisable.propTypes = {
  onToggleTfa: PropTypes.func.isRequired,
};

export default TFAGADisable;
