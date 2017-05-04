import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Time from '@quoine/components/Time';
import Country from 'components/UserInfo/Jp/Country';
import Income from './Income';

const UserInfoPteIndi = ({ info, Item }) => (
  <div>
    <Item label={translate('sign-up-pi:name')}>
      {`${info.name.first} ${info.name.last}`}
    </Item>
    <Item label={translate('sign-up-pi:nationality')}>
      <Country iso={info.nationality} />
    </Item>
    {info.birth ? (
      <Item label={translate('sign-up-pi:birth')}>
        <Time value={info.birth} type="dateWithYear" />
      </Item>
    ) : null}
    <Item label={translate('sign-up-pi:address')}>
      {info.address}
    </Item>
    {info.income ? (
      <Income info={info} Item={Item} />
    ) : null}
  </div>
);

UserInfoPteIndi.propTypes = {
  info: PropTypes.shape({}).isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoPteIndi;
