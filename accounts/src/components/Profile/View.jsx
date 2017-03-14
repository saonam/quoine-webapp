import React from 'react';

import translate from '@quoine/translate';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';
import Time from '@quoine/components/Time';

import Row from 'components/SettingsRow';
import Body from 'components/SettingsBody';

import Verification from './Verification';
import Form from './Form';

const ProfileView = ({ user, onChangeStatus }) => (
  user ? (
    <Body>
      <div>
        <Row label={translate('user:id')}>{user.id}</Row>
        <Row label={translate('user:first-name')}>{user.firstName}</Row>
        <Row label={translate('user:last-name')}>{user.lastName}</Row>
        <Row label={translate('user:email')}>{user.email}</Row>
        <Row label={translate('user:since')}>
          <Time value={user.since} type="dateWithYear" />
        </Row>
      </div>
      <div>
        <Row label={translate('user:affiliate-code')}>
          {user.affiliateCode}
        </Row>
      </div>
      <div>
        <Row label={translate('user:verification')}>
          <Verification user={user} />
        </Row>
        {['declined', 'pending'].indexOf(user.status) !== -1 ? (
          <Form user={user} onChangeStatus={onChangeStatus} />
        ) : null}
      </div>
    </Body>
  ) : <LoadingIconWrapper />
);

ProfileView.propTypes = {
  user: React.PropTypes.shape({}),
  onChangeStatus: React.PropTypes.func.isRequired,
};

export default ProfileView;
