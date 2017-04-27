import PropTypes from 'prop-types';
import React from 'react';

const withHorizontal = ({ Vertical, Horizontal }) => {
  const Container = ({ horizontal, ...others }) => {
    const Element = horizontal ? Horizontal : Vertical;
    return <Element {...others} />;
  };
  Container.propTypes = {
    horizontal: PropTypes.bool,
  };
  return Container;
};

export default withHorizontal;
