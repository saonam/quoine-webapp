import React from 'react';

import translate from '@quoine/translate';

import Country from './Country';

const UserInfoCommon = ({ info, Item }) => (
  <div>
    <Item label={translate('sign-up:email')}>
      {info.email}
    </Item>
    <Item label={translate('sign-up:country')}>
      <Country iso={info.country} />
    </Item>
    <Item>
      <p>私は、日本以外に居住地国が無いことを確約します。</p>
      <p>私は、米国納税義務が無いことを確約します。</p>
    </Item>
  </div>
);

UserInfoCommon.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoCommon;
