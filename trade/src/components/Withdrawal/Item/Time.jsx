import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const WdrItemTime = ({ withdrawal, type }) => (
  <Time value={withdrawal.createdAt} type={type} />
);

WdrItemTime.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
  type: Time.propTypes.type,
};

export default WdrItemTime;
