import React from 'react';

const WdrItemAddress = ({ withdrawal }) => (
  <span>{withdrawal.address}</span>
);

WdrItemAddress.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItemAddress;
