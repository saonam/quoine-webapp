import React from 'react';

const WdrItemId = ({ withdrawal }) => (
  <span>{withdrawal.id}</span>
);

WdrItemId.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItemId;
