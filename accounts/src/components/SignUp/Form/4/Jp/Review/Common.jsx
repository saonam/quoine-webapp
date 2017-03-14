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
  </div>
);

SignUpBody4JpReviewCommon.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewCommon;
