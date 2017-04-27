import PropTypes from 'prop-types';
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
  info: PropTypes.shape({}).isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoPteBasic;
