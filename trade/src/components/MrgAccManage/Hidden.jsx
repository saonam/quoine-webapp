import PropTypes from 'prop-types';
import React from 'react';

import Base from './Base';

const MrgAccManageHidden = ({ modelKey }) => (
  <Base name={modelKey} type="hidden" />
);

MrgAccManageHidden.propTypes = {
  modelKey: PropTypes.string.isRequired,
};

export default MrgAccManageHidden;
