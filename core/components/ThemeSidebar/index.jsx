import React from 'react';

import Sidebar from '../Sidebar';

import Button from './Button';
import Body from './Body';

const ThemeSidebar = () => (
  <Sidebar
    Button={Button} Body={Body} side="right" overlayVisible={false}
  />
);

export default ThemeSidebar;
