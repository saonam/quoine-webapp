import React from 'react';

const withHorizontal = ({ Vertical, Horizontal }) => {
  const Container = ({ horizontal, ...others }) => {
    const Element = horizontal ? Horizontal : Vertical;
    return <Element {...others} />;
  };
  Container.propTypes = {
    horizontal: React.PropTypes.bool,
  };
  return Container;
};

export default withHorizontal;
