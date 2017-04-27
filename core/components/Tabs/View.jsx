import PropTypes from 'prop-types';
import React from 'react';

import Header from './Header';

import styles from './styles.css';

const Tabs = ({ panels, currentId, onSelect, ...others }) => {
  const all = panels.filter(item => !item.hidden);
  const current = all.find(
    item => item.id === currentId
  ) || all[0];
  const { Element } = current;
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header all={all} current={current} onSelect={onSelect} />
      </div>
      <div className={styles.body}>
        <Element {...others} />
      </div>
    </div>
  );
};

Tabs.propTypes = {
  panels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    Element: PropTypes.func.isRequired,
    hidden: PropTypes.bool,
  })).isRequired,
  // ===
  currentId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default Tabs;
