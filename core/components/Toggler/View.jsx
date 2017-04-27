import PropTypes from 'prop-types';
import React from 'react';

const TogglerView = ({ open, onToggle, Active, Standby, ...others }) => (
  open ? (
    <Active onClose={onToggle} {...others} />
  ) : (
    <Standby onOpen={onToggle} {...others} />
  )
);

TogglerView.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  Active: PropTypes.func.isRequired,
  Standby: PropTypes.func.isRequired,
};

export default TogglerView;
