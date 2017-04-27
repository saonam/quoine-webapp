import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@quoine/components/Icon';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const LayoutMoveButton = ({ panel, side, onMove }) => {
  if (panel.grow < 0) { return null; }

  const isOk = (
    (side === 'left' && panel.order !== panel.minOrder) ||
    (side === 'right' && panel.order !== panel.maxOrder)
  );

  return (
    <div className={styles.main}>
      {isOk ? (
        <Button styleName="icon primary-2 block" onClick={onMove}>
          <Icon glyph={`chevron-${side}`} height={18} width={18} />
        </Button>
      ) : null}
    </div>
  );
};

LayoutMoveButton.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  onMove: PropTypes.func.isRequired,
  panel: PropTypes.shape({
    order: PropTypes.number.isRequired,
    minOrder: PropTypes.number.isRequired,
    maxOrder: PropTypes.number.isRequired,
  }).isRequired,
};

export default LayoutMoveButton;
