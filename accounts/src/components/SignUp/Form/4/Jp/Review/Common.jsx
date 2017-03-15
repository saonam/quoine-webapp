import React from 'react';

import translate from '@quoine/translate';

import Item from './Item';
import Country from './Country';

const SignUpBody4JpReviewCommon = ({ form }) => (
  <div>
    <Item label={translate('sign-up:email')}>
      {form.email}
    </Item>
    <Item label={translate('sign-up:country')}>
      <Country iso={form.country} />
    </Item>
    <Item>
      <p>私は、日本以外に居住地国が無いことを確約します。</p>
      <p>私は、米国納税義務が無いことを確約します。</p>
    </Item>
  </div>
);

SignUpBody4JpReviewCommon.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewCommon;
