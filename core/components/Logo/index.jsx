import React from 'react';

import Image from '../Image';

import styles from './styles.css';

import quoineImage from './quoine.svg';
import tradersImage from './traders.svg';

let info;

switch (process.env.REACT_APP_VENDOR) {
  case 'traders':
    info = { src: tradersImage, width: 138 };
    break;
  case 'quoine':
  default:
    info = { src: quoineImage, width: 78 };
    break;
}

const Logo = () => (
  <Image
    src={info.src} className={styles.main} width={info.width} height={24}
  />
);

export default Logo;
