import React from 'react';

import Toggler from '@quoine/components/Toggler';

import Standby from './Standby';
import Active from './Active';

const VolumesFilter = (props) => (
  <Toggler Standby={Standby} Active={Active} {...props} />
);

export default VolumesFilter;
