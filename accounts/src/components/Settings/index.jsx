import React from 'react';
import AuthorizeWrapper from 'components/AuthorizeWrapper';

import View from './View';

const Settings = (props) => (
  <AuthorizeWrapper {...props} Element={View} />
);

export default Settings;
