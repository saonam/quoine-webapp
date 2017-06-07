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
    {process.env.REACT_APP_VENDOR !== 'traders' ? (
      <div>
        <Row label={translate('settings:tfa-title')}>
          <TFAManage />
        </Row>
      </div>
    ) : null}
  </Body>
);

export default SecurityView;
