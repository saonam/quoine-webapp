import React from 'react';

import translate from '@quoine/translate';

import Country from './Country';

const UserInfoBasic = ({ info, Item }) => (
  <div>
    <Item label={translate('sign-up:email')}>
      {info.email}
    </Item>
    <Item label={translate('sign-up:country')}>
      <Country iso={info.country} />
    </Item>
    <Item>
      <p>当社は、当社は国内法人であることを確約します。</p>
      <p>当社は、米国納税義務がないことを確約します。</p>
    </Item>
  </div>
);

UserInfoBasic.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoBasic;
