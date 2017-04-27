import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const PanelsSpineButton = ({ panel, onExpand }) => {
  const Element = panel.Spine;
  return (
    <Button
      className={styles.main} styleName="primary-4" onClick={onExpand}
    >
      <span className={styles.text}>
        <Element />
      </span>
    </Button>
  );
};

PanelsSpineButton.propTypes = {
  panel: PropTypes.shape({
    Spine: PropTypes.func.isRequired,
  }).isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default PanelsSpineButton;
