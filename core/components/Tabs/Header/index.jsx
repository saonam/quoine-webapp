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
  all: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
  })).isRequired,
  // ===
  current: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
  }).isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

export default TabsHeader;
