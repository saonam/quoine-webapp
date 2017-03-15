import React from 'react';

import translate from '@quoine/translate';

import Time from '@quoine/components/Time';
import Row from 'components/SettingsRow';

const ProfilePteInfo = ({ info }) => (
  <div>
    <Row label={translate('user:id')}>{info.id}</Row>
    <Row label={translate('user:first-name')}>{info.firstName}</Row>
    <Row label={translate('user:last-name')}>{info.lastName}</Row>
    <Row label={translate('user:email')}>{info.email}</Row>
    <Row label={translate('user:since')}>
      <Time value={info.since} type="dateWithYear" />
    </Row>
  </div>
);

ProfilePteInfo.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
};

export default ProfilePteInfo;
