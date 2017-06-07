import React from 'react';

import Header from '@quoine/components/Header';

import ToggleDouble from './ToggleDouble';
// import SelectMode from './SelectMode';

import styles from './styles.css';

const ChartsHeader = ({ double, onToggleDouble }) => (
  <Header styleName="hor-small" className={styles.main}>
    <ToggleDouble {...{ double, onToggleDouble }} />
  </Header>
);

// TODO:
// Will be enable when Trading View Chart is ready in QUOINE

// const ChartsHeader = ({ double, onToggleDouble, mode, onSelectMode }) => (
//   <Header styleName="hor-small" className={styles.main}>
//     <div className={styles.double}>
//       <ToggleDouble {...{ double, onToggleDouble }} />
//     </div>
//     <div className={styles.mode}>
//       {process.env.REACT_APP_VENDOR === 'qryptos' ? null : (
//         <SelectMode {...{ mode, onSelectMode }} />
//       )}
//     </div>
//   </Header>
// );

ChartsHeader.propTypes = {
  ...ToggleDouble.propTypes,
  // ...SelectMode.propTypes,
};

export default ChartsHeader;
