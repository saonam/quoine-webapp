import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroupRaw from 'react-transition-group/CSSTransitionGroup';

const TransitionGroup = ({ children }) => (
  <TransitionGroupRaw
    transitionName="transition" component="div"
    transitionEnterTimeout={700} transitionLeave={false}
  >
    {children}
  </TransitionGroupRaw>
);

TransitionGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TransitionGroup;
