import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';


const WdrItemStatus = ({ withdrawal }) => (
  <span>{translate(`withdrawal:status-${withdrawal.status}`)}</span>
);

WdrItemStatus.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemStatus;
