import PropTypes from 'prop-types';
import React from 'react';

import Base from './Base';

const MrgAccManageVisible = ({ modelKey }) => (
  <Base name={modelKey} type="visible" />
);

MrgAccManageVisible.propTypes = {
  modelKey: PropTypes.string.isRequired,
};

export default MrgAccManageVisible;
