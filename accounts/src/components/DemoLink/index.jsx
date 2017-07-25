import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

import styles from './styles.css';

const isProd = (
  window.location.origin === 'https://accounts.quoinex.com' ||
  window.location.origin === 'https://accounts.qryptos.com'
);

const sandboxUrl = (
  // Offical demo mode for users will works in sandbox, so this is hardcoded
  process.env.REACT_APP_VENDOR === 'qryptos' ?
  'https://accounts-sandbox.qryptos.com/demo?continue=https://trade-sandbox.qryptos.com/'
  :
  'https://accounts-sandbox.quoine.com/demo?continue=https://trade-sandbox.quoine.com/'
);

const DemoLink = ({ ...others }) => {
  if (isProd) {
    return (
      <a
        href={sandboxUrl}
        className={styles.link}
        {...others}
      >
        {translate('demo:title')}
      </a>
    );
  }

  return (
    <Link pathname="/demo" styleName="accent text" {...others}>
      {translate('demo:title')}
    </Link>
  );
};

export default DemoLink;
