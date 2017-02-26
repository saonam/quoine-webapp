import React from 'react';

import LayoutPreview from 'components/LayoutPreview';

import styles from './styles.css';

const LayoutSelectButton = ({ name, onSet }) => (
  <button
    className={styles.normal}
    onClick={onSet}
  >
    <LayoutPreview name={name} />
  </button>
);

LayoutSelectButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  onSet: React.PropTypes.func.isRequired,
};

export default LayoutSelectButton;
