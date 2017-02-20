import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

const SignInHeaderLink = () => (
  <Link pathname="/sign-in" styleName="inverse-light inline">
    {translate('sign-in:title')}
  </Link>
);

export default SignInHeaderLink;
