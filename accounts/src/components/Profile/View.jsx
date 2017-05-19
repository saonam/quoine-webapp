import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Row from 'components/SettingsRow';
import Body from 'components/SettingsBody';

import Verification from './Verification';
import Form from './Form';
import Info from './Info';

const Profile = ({ user, onChangeStatus }) => (
  user.id ? (
    <Body>

      <div>
        {translate('user:help-edit-info')}
      </div>

      <div>
        <Row label={translate('user:verification')}>
          <Verification user={user} />
        </Row>
        {['declined', 'pending'].indexOf(user.status) !== -1 ? (
          <Form user={user} onChangeStatus={onChangeStatus} />
        ) : null}
      </div>

      <div>
        <Row label={translate('user:affiliate-code')}>
          {user.affiliateCode}
        </Row>
      </div>

      <Info info={user} />

    </Body>
  ) : <LoadingIconWrapper />
);

Profile.propTypes = {
  user: PropTypes.shape({}).isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default Profile;
