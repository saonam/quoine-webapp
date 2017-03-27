import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';

const PhoneInput = (props) => (
  <TextInput
    {...props}
    type="tel"
    pattern="[0-9]+"
    title={translate('input:phone-title')}
  />
);

export default PhoneInput;
