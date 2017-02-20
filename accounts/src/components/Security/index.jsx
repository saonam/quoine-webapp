import React from 'react';

import translate from '@quoine/translate';

import Row from 'components/SettingsRow';
import Body from 'components/SettingsBody';
import ChangePassword from 'components/ChangePassword';
import TFAManage from 'components/TFAManage';

const SecurityView = () => (
  <Body>
    <div>
      <Row label={translate('settings:password-title')}>
        <ChangePassword />
      </Row>
    </div>
    <div>
      <Row label={translate('settings:sign-in-title')}>
        <TFAManage />
      </Row>
    </div>
  </Body>
);

export default SecurityView;
