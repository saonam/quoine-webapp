import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Tabs from '@quoine/components/Tabs';
import Button from '@quoine/components/Button';

import Application from 'components/Application';
import Profile from 'components/Profile';
import Security from 'components/Security';
import TokenManage from 'components/TokenManage';

import styles from './styles.css';

const onBack = () => {
  window.location.href = process.env.REACT_APP_TRADE_HOST;
};

const BackButton = () => (
  <Button styleName="inverse-light inline" onClick={onBack}>
    ← {translate('settings:back-to-trading')}
  </Button>
);

const SettingsView = () => (
  <Modal
    isOpen isLarge isNoOverlay
    contentLabel={translate('settings:title')}
    title={translate('settings:title')}
    leftButton={<BackButton />}
  >
    <div className={styles.main}>
      <Tabs
        name="settings"
        panels={[
          {
            id: 'application',
            Element: Application,
            label: translate('settings:application-title'),
          },
          {
            id: 'profile',
            Element: Profile,
            label: translate('settings:profile-title'),
          },
          {
            id: 'security',
            Element: Security,
            label: translate('settings:security-title'),
          },
          {
            id: 'api',
            Element: TokenManage,
            label: translate('settings:api-title'),
          },
        ]}
      />
    </div>
  </Modal>
);

export default SettingsView;
