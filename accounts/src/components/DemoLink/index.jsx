import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const DemoLink = ({ ...others }) => {
  // Demo only works in sandbox, so this is hardcoded
  const href = process.env.REACT_APP_VENDOR === 'qryptos' ?
  'https://accounts-sandbox.qryptos.com/demo?continue=https://trade-sandbox.qryptos.com/'
  :
  'https://accounts-sandbox.quoine.com/demo?continue=https://trade-sandbox.quoine.com/';
  return (
    <a
      href={href}
      className={styles.link}
      {...others}
    >
      {translate('demo:title')}
    </a>
  );
};

export default DemoLink;
