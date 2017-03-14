import React from 'react';

import translate from '@quoine/translate';

import TextBox from '@quoine/components/TextBox';

const PhoneInput = (props) => (
  <TextBox
    type="tel"
    pattern="[0-9]+"
    title={translate('input:phone-title')}
    {...props}
  />
);

export default PhoneInput;
