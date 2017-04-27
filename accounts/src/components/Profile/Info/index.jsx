import PropTypes from 'prop-types';
import React from 'react';

import UserInfo from 'components/UserInfo';
import Item from 'components/SettingsRow';
import Group from './Group';

const ProfileJpInfo = ({ info }) => (
  <UserInfo info={info} Group={Group} Item={Item} />
);

ProfileJpInfo.propTypes = {
  info: PropTypes.shape({}).isRequired,
};

export default ProfileJpInfo;
