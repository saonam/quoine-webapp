import React from 'react';

import Header from '@quoine/components/Header';

import ToggleDouble from './ToggleDouble';
import SelectProvider from './SelectProvider';

import styles from './styles.css';

const ChartsHeader = ({ double, onToggleDouble, provider, onSelectProvider }) => (
  <Header styleName="hor-small" className={styles.main}>
    <div className={styles.double}>
      <ToggleDouble {...{ double, onToggleDouble }} />
    </div>
    {process.env.REACT_APP_VENDOR === 'qryptos' ? (
      <div className={styles.provider}>
        <SelectProvider {...{ provider, onSelectProvider }} />
      </div>
    ) : null}
  </Header>
);

ChartsHeader.propTypes = {
  ...ToggleDouble.propTypes,
  ...SelectProvider.propTypes,
};

export default ChartsHeader;
