import React from 'react';

import AppFrame from '@quoine/components/AppFrame';

import Body from 'components/Body';
import Menu from 'components/Menu';

const App = () => (
  <AppFrame menu={<Menu />} body={<Body />} />
);

export default App;
