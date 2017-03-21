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
  </div>
);

UserInfoBasic.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoBasic;
