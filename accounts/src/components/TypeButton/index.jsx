import React from 'react';

import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const TypeButton = ({ onClick, title, description }) => (
  <button
    type="button" className={styles.main} onClick={onClick}
  >
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
    <div className={styles.icon}>
      <Icon glyph="chevron-right" />
    </div>
  </button>
);

TypeButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default TypeButton;
