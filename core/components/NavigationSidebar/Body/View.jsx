import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import LogoIcon from '@quoine/components/LogoIcon';
import UserOverview from '@quoine/components/UserOverview';
import HelpButton from '@quoine/components/HelpButton';
import LanguageSelect from '@quoine/components/LanguageSelect';
import Link from '@quoine/components/NavigationLink';

import AccountsWarning from '@quoine/components/AccountsWarning';

import styles from '../styles.css';

/* eslint-disable jsx-a11y/no-static-element-interactions */

const links = ({
  traders: {
    fee: 'https://www.min-btc.com/service',
    faq: 'https://www.min-btc.com/support/faq',
  },
  qryptos: {
    fee: 'https://www.qryptos.com/#markets-fees',
    faq: 'https://qryptos.zendesk.com/hc/en-us',
  },
  quoine: {
    fee: 'https://www.quoine.com/fees',
    faq: 'https://quoine.zendesk.com/hc/en-us',
  },
})[process.env.REACT_APP_VENDOR];

const signInProdUrl = ({
  quoine: 'https://accounts.quoinex.com/sign-in',
  qryptos: 'https://accounts.qryptos.com/sign-in',
  traders: 'https://account.min-btc.com/sign-in',
})[process.env.REACT_APP_VENDOR];

const NavigationSidebarBody = ({ user, onClose }) => {
  const signOutButton = user.demo ? (
    <a className={styles.signOut} href={signInProdUrl}>
      {t('menu:sign-out')}
    </a>
  ) : (
    <Link
      pathname={`${process.env.REACT_APP_ACCOUNTS_HOST}/sign-out`}
      styleName="negative"
      target="_self"
    >
      {t('menu:sign-out')}
    </Link>
  );

  return (
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
          <div onClick={onClose}>
            <Link pathname={`${process.env.REACT_APP_TRADE_HOST}`}>
              {t('menu:dashboard')}
            </Link>
          </div>
          {process.env.REACT_APP_VENDOR !== 'traders' ? (
            <AccountsWarning />
          ) : null}
          <div onClick={onClose}>
            <Link pathname={`${process.env.REACT_APP_ACCOUNTS_HOST}/settings`}>
              {t('menu:settings')}
            </Link>
          </div>
        </div>
      </div>
      <div onClick={onClose}>
        <Link pathname={links.fee} target="_blank">
          {t('menu:fee')}&nbsp;↗
        </Link>
        <Link pathname={links.faq} target="_blank">
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
        {signOutButton}
      </div>
    </div>
  );
};

NavigationSidebarBody.propTypes = {
  user: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavigationSidebarBody;
