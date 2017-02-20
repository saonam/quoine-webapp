import React from 'react';

import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const TypeButton = ({ onClick, title, description }) => (
  <button
    type="button" className={styles.main} onClick={onClick}
  >
    <span className={styles.title}>{title}</span>
    <span className={styles.description}>{description}</span>
    <span className={styles.icon}>
      <Icon glyph="chevron-right" />
    </span>
  </button>
);

TypeButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default TypeButton;
