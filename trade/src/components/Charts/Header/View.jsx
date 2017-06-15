/* eslint-disable */
// TODO
// Should enable SELECT MODE when both of Charts are ready
import React from 'react';

import Header from '@quoine/components/Header';

import ToggleDouble from './ToggleDouble';
import SelectMode from './SelectMode';

import styles from './styles.css';

const ChartsHeader = ({ double, onToggleDouble, provider, onSelectMode }) => (
  <Header styleName="hor-small" className={styles.main}>
    <div className={styles.double}>
      <ToggleDouble {...{ double, onToggleDouble }} />
    </div>
  </Header>
);

// {process.env.REACT_APP_VENDOR === 'quoine' ? (
//   <div className={styles.provider}>
//     <SelectMode {...{ provider, onSelectMode }} />
//   </div>
// ) : null}

ChartsHeader.propTypes = {
  ...ToggleDouble.propTypes,
  ...SelectMode.propTypes,
};

export default ChartsHeader;
