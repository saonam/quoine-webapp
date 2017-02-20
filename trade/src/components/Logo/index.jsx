import React from 'react';

import Image from '@quoine/components/Image';

import styles from './styles.css';

import quoineLeftImage from './quoine-left.svg';
import quoineRightImage from './quoine-right.svg';
import tradersImage from './traders.svg';

const INFO_MAP = {
  traders: {
    src: tradersImage,
    width: 138,
  },
};

const vendor = process.env.REACT_APP_VENDOR;
const info = INFO_MAP[vendor];

const Logo = () => (
  vendor === 'quoine' ? (
    <div>
      <Image
        src={quoineLeftImage} className={styles.left} width={60} height={24}
      />
      <Image
        src={quoineRightImage} className={styles.right} width={104} height={24}
      />
    </div>
  ) : (
    <Image
      src={info.src} className={styles.main} width={info.width} height={24}
    />
  )
);

export default Logo;
