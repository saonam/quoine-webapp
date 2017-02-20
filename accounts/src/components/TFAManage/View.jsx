import React from 'react';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Standby from './Standby';
import Change from './Change';
import Toggle from './Toggle';

const Elements = {
  standby: Standby,
  change: Change,
  toggle: Toggle,
};

const TFAManageView = ({ status, busy, ...others }) => {
  if (busy) { return <LoadingIconWrapper type="height" />; }
  const Element = Elements[status];
  return <Element {...others} />;
};

TFAManageView.propTypes = {
  status: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default TFAManageView;
