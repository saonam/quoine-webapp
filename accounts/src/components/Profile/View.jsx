import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';
import Button from '@quoine/components/Button';

import Row from 'components/SettingsRow';
import Body from 'components/SettingsBody';
import UserEdit from 'components/UserEdit';

import Verification from './Verification';
import Form from './Form';
import Info from './Info';

const Profile = ({ user, onChangeStatus, open, onOpen, onClose }) => (
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

      <Info info={user} />

      {user.underJFSA ? (
        <div>
          <Button styleName="accent text inline" onClick={onOpen}>
            {translate('edit-user:action')}
          </Button>
        </div>
      ) : null}

      {user.underJFSA && open ? (
        <UserEdit onClose={onClose} />
      ) : null}

    </Body>
  ) : <LoadingIconWrapper />
);

Profile.propTypes = {
  user: PropTypes.shape({}).isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  // ===
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Profile;
