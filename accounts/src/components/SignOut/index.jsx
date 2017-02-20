import React from 'react';
import AuthorizeWrapper from 'components/AuthorizeWrapper';

import Container from './Container';

const SignOut = (props) => (
  <AuthorizeWrapper {...props} Element={Container} />
);

export default SignOut;
