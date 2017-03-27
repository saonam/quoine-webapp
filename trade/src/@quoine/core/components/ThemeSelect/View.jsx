import React from 'react';

import Button from './Button';

import styles from './styles.css';

const ThemeSelect = ({ all, direction }) => (
  <div className={styles[`main-${direction}`]}>
    {all.map(theme => (
      <div className={styles[`button-${direction}`]} key={theme}>
        <Button key={theme} theme={theme} />
      </div>
    ))}
  </div>
);

ThemeSelect.propTypes = {
  all: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  direction: React.PropTypes.oneOf(['row', 'column']).isRequired,
};

export default ThemeSelect;
