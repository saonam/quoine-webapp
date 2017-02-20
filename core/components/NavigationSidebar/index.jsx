import React from 'react';

import Sidebar from '../Sidebar';

import Button from './Button';
import Body from './Body';

const NavigationSidebar = () => (
  <Sidebar Button={Button} Body={Body} side="left" />
);

export default NavigationSidebar;
