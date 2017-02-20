import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

import styles from './styles.css';

const DemoLink = ({ ...others }) => (
  process.env.REACT_APP_QUOINE_HOST.indexOf('sandbox') !== -1 ? (
    <Link styleName="accent text" pathname="/demo" {...others}>
      {translate('demo:title')}
    </Link>
  ) : (
    <a
      // Demo only works in sandbox, so this is hardcoded
      href="https://accounts-sandbox.quoine.com/demo?continue=https://trade-sandbox.quoine.com/"
      className={styles.link}
      {...others}
    >
      {translate('demo:title')}
    </a>
  )
);

export default DemoLink;
