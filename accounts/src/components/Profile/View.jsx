import React from 'react';

import translate from '@quoine/translate';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Row from 'components/SettingsRow';
import Body from 'components/SettingsBody';

import Verification from './Verification';
import Form from './Form';
import JpInfo from './JpInfo';
import PteInfo from './PteInfo';

const Profile = ({ user, onChangeStatus }) => (
  user.id ? (
    <Body>
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
      {user.isQuoineJapan ? (
        <JpInfo info={user} />
      ) : (
        <PteInfo info={user} />
      )}
    </Body>
  ) : <LoadingIconWrapper />
);

Profile.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  onChangeStatus: React.PropTypes.func.isRequired,
};

export default Profile;
