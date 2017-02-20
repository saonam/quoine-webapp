import React from 'react';

const TogglerView = ({ open, onToggle, Active, Standby, ...others }) => (
  open ? (
    <Active onClose={onToggle} {...others} />
  ) : (
    <Standby onOpen={onToggle} {...others} />
  )
);

TogglerView.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  Active: React.PropTypes.func.isRequired,
  Standby: React.PropTypes.func.isRequired,
};

export default TogglerView;
