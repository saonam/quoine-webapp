import React from 'react';

import Image from '@quoine/components/Image';

import styles from './styles.css';

import quoineImage from './quoine.svg';
import tradersImage from './traders.svg';
import qryptosImage from './qryptos.svg';

let src;
let width = 60;
let height = 60;

switch (process.env.REACT_APP_VENDOR) {
  case 'traders':
    src = tradersImage;
    break;
  case 'qryptos':
    src = qryptosImage;
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
