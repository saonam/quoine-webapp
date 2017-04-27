import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Icon from '@quoine/components/Icon';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const LayoutResizeButton = ({ panel, side, onResize, hover }) => {
  const isOk = (
    (side === 'collapse' && panel.grow !== panel.minGrow) ||
    (side === 'expand' && panel.grow !== panel.maxGrow)
  );
  if (!isOk) { return null; }
  return (
    <Button
      className={styles[`main-${hover ? 'hover' : 'normal'}`]}
      styleName="text primary-2 block" onClick={onResize}
    >
      <Icon glyph={`resize-${side}`} width={24} height={18} />
      {panel.grow > panel.minGrow ? (
        <span className={styles.label}>
          {translate(`panels:${side}`)}
        </span>
      ) : null}
    </Button>
  );
};

LayoutResizeButton.propTypes = {
  side: PropTypes.oneOf(['expand', 'collapse']).isRequired,
  onResize: PropTypes.func.isRequired,
  panel: PropTypes.shape({
    grow: PropTypes.number.isRequired,
    minGrow: PropTypes.number.isRequired,
    maxGrow: PropTypes.number.isRequired,
  }).isRequired,
  hover: PropTypes.bool.isRequired,
};

export default LayoutResizeButton;
