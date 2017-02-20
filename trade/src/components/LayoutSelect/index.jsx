import React from 'react';

import Sidebar from '@quoine/components/Sidebar';

import Open from './Open';
import Body from './Body';

const LayoutSelect = () => (
  <Sidebar Button={Open} Body={Body} side="right" />
);

export default LayoutSelect;
