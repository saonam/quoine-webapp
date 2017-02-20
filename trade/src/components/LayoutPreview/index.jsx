import React from 'react';

import styles from './styles.css';

import alphaBg from './images/alpha-bg.svg';
import alphaIcon from './images/alpha-icon.svg';
import betaBg from './images/beta-bg.svg';
import betaIcon from './images/beta-icon.svg';
import gammaBg from './images/gamma-bg.svg';
import gammaIcon from './images/gamma-icon.svg';

const images = {
  alpha: { bg: alphaBg, icon: alphaIcon },
  beta: { bg: betaBg, icon: betaIcon },
  gamma: { bg: gammaBg, icon: gammaIcon },
};

const LayoutPreview = ({ name }) => (
  <div className={styles.main}>
    <svg className={styles.bg} width="144" height="108">
      <use xlinkHref={images[name].bg} />
    </svg>
    <svg className={styles.icon} width="144" height="108">
      <use xlinkHref={images[name].icon} />
    </svg>
  </div>
);

LayoutPreview.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default LayoutPreview;
