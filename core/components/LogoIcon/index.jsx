import React from 'react';

import Image from '@quoine/components/Image';

import styles from './styles.css';

import quoineImage from './quoine.svg';
import tradersImage from './traders.svg';

let src; let width; let height;

switch (process.env.REACT_APP_VENDOR) {
  case 'traders':
    src = tradersImage; width = 60; height = 60;
    break;
  case 'quoine':
  default:
    src = quoineImage; width = 30; height = 30;
    break;
}

const LogoIcon = () => (
  <Image
    src={src} className={styles.main} width={width} height={height}
  />
);

export default LogoIcon;
