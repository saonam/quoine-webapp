import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

const SignUpLink = ({ ...others }) => (
  <Link pathname="/sign-up" styleName="accent text" {...others}>
    {translate('sign-up:title')}
  </Link>
);

export default SignUpLink;
