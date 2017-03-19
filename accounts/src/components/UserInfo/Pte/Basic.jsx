import React from 'react';

import translate from '@quoine/translate';

import Time from '@quoine/components/Time';

const UserInfoPteBasic = ({ info, Item }) => (
  <div>
    <Item label={translate('user:id')}>
      {info.id}
    </Item>
    <Item label={translate('user:email')}>
      {info.email}
    </Item>
    <Item label={translate('user:since')}>
      <Time value={info.since} type="dateWithYear" />
    </Item>
  </div>
);

UserInfoPteBasic.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoPteBasic;
