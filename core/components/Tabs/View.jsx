import React from 'react';

import Header from './Header';

import styles from './styles.css';

const Tabs = ({ panels, currentId, onSelect, ...others }) => {
  const all = panels.filter(item => !item.hidden);
  const current = all.filter(
    item => item.id === currentId
  )[0] || all[0];
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
  panels: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    Element: React.PropTypes.func.isRequired,
    hidden: React.PropTypes.bool,
  })).isRequired,
  // ===
  currentId: React.PropTypes.string,
  onSelect: React.PropTypes.func.isRequired,
};

export default Tabs;
