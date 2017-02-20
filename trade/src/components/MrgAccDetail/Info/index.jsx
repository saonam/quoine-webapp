import React from 'react';

import styles from './styles.css';

const MrgAccDetailInfo = ({ mrgAcc, Element, side }) => (
  mrgAcc ? (
    <Element mrgAcc={mrgAcc} side={side} />
  ) : (
    <span className={styles.empty}>–</span>
  )
);

MrgAccDetailInfo.propTypes = {
  mrgAcc: React.PropTypes.shape({}),
  Element: React.PropTypes.func.isRequired,
  side: React.PropTypes.oneOf(['short', 'long']).isRequired,
};

export default MrgAccDetailInfo;
