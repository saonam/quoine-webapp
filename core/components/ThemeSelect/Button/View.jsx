import PropTypes from 'prop-types';
import React from 'react';

import Preview from '@quoine/components/ThemePreview';

import styles from './styles.css';

const ThemeButton = ({ theme, current, onClick }) => (
  <button
    className={styles[current === theme ? 'highlight' : 'normal']}
    onClick={onClick}
  >
    <Preview theme={theme} />
  </button>
);

ThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
