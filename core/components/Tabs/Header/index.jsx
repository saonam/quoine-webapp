import PropTypes from 'prop-types';
import React from 'react';

import Header from '@quoine/components/Header';

import Button from '../Button';

import styles from './styles.css';

const TabsHeader = ({ all, current, onSelect }) => (
  <Header styleName={`text hor-small ${current.color || 'primary-1'}`}>
    <div className={styles.buttons}>
      {all.map(panel => (
        <div key={panel.id} className={styles.button}>
          <Button panel={panel} current={current} onSelect={onSelect} />
        </div>
      ))}
    </div>
  </Header>
);

TabsHeader.propTypes = {
  all: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  // ===
  current: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TabsHeader;
