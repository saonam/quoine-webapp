import React from 'react';

import t from '@quoine/translate';

import LogoIcon from '@quoine/components/LogoIcon';
import UserOverview from '@quoine/components/UserOverview';
import HelpButton from '@quoine/components/HelpButton';
import LanguageSelect from '@quoine/components/LanguageSelect';
import Link from '@quoine/components/NavigationLink';
// import Modal from '@quoine/components/Modal';

import AccountLink from './AccountLink';

import styles from './styles.css';

/* eslint-disable jsx-a11y/no-static-element-interactions */

const accountsHost = process.env.REACT_APP_ACCOUNTS_HOST;
const tradeHost = process.env.REACT_APP_TRADE_HOST;

const NavigationSidebarBody = ({ onClose }) => (
  <div className={styles.main}>
    <div>
      <div className={styles.section}>
        <UserOverview />
      </div>
      <div className={styles.section}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
      </div>
      <div className={styles.section} >
        <Link
          pathname={`${tradeHost}/`}
          target="_self"
          onClick={onClose}
        >
          {t('menu:dashboard')}
        </Link>
        <AccountLink />
        <Link
          pathname={`${accountsHost}/settings`}
          target="_self"
          onClick={onClose}
        >
          {t('menu:settings')}
        </Link>
      </div>
    </div>
    <div onClick={onClose}>
      <Link pathname="https://www.quoine.com/fees/">
        {t('menu:fee')}&nbsp;↗
      </Link>
      <Link pathname="https://quoine.zendesk.com/hc">
        {t('menu:faq')}&nbsp;↗
      </Link>
      <Link>
        <HelpButton />
      </Link>
    </div>
    <div>
      <Link presentational>
        {t('menu:language')}
      </Link>
      <div className={styles.languageSelect}>
        <LanguageSelect />
      </div>
    </div>
    <div onClick={onClose}>
      <Link pathname={`${accountsHost}/sign-out`} styleName="negative" target="_self">
        {t('menu:sign-out')}
      </Link>
    </div>
  </div>
);

NavigationSidebarBody.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

export default NavigationSidebarBody;
