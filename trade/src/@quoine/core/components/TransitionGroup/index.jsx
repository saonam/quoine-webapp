import React from 'react';
import TransitionGroupRaw from 'react-addons-css-transition-group';

const TransitionGroup = ({ children }) => (
  <TransitionGroupRaw
    transitionName="transition" component="div"
    transitionEnterTimeout={700} transitionLeave={false}
  >
    {children}
  </TransitionGroupRaw>
);

TransitionGroup.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default TransitionGroup;
