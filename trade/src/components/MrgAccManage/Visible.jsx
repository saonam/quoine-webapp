import React from 'react';

import Base from './Base';

const MrgAccManageVisible = ({ modelKey }) => (
  <Base name={modelKey} type="visible" />
);

MrgAccManageVisible.propTypes = {
  modelKey: React.PropTypes.string.isRequired,
};

export default MrgAccManageVisible;
