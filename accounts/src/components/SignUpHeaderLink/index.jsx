import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

const SignUpHeaderLink = () => (
  <Link pathname="/sign-up" styleName="inverse-light inline">
    {translate('sign-up:title')}
  </Link>
);

export default SignUpHeaderLink;
