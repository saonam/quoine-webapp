import React from 'react';

import Alpha from './Alpha';
import Beta from './Beta';
// import Gamma from './Gamma';

import styles from './styles.css';

const Gamma = () => null;

const DashboardMain = ({ layout }) => {
  let child = null;
  switch (layout) {
    case 'beta':
      child = <Beta />; break;
    case 'gamma':
      child = <Gamma />; break;
    case 'alpha':
    default:
      child = <Alpha />;
  }
  return (
    <div className={styles.main}>
      {child}
    </div>
  );
};

DashboardMain.propTypes = {
  layout: React.PropTypes.oneOf(['alpha', 'beta', 'gamma']).isRequired,
};

export default DashboardMain;

