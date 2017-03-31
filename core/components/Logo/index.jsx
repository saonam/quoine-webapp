import React from 'react';

import Image from '@quoine/components/Image';

import styles from './styles.css';

import logo from './logo-process.env.REACT_APP_VENDOR.svg';

let width;
switch (process.env.REACT_APP_VENDOR) {
  case 'traders': { width = 138; break; }
  case 'qryptos': { width = 103; break; }
  case 'quoine': default: { width = 78; break; }
}

const Logo = () => (
  <Image
    src={logo} className={styles.main} width={width} height={24}
  />
);

export default Logo;
