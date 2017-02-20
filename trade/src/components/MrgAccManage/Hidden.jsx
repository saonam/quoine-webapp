import React from 'react';

import Base from './Base';

const MrgAccManageHidden = ({ modelKey }) => (
  <Base name={modelKey} type="hidden" />
);

MrgAccManageHidden.propTypes = {
  modelKey: React.PropTypes.string.isRequired,
};

export default MrgAccManageHidden;
