import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const CarouselButton = ({
  side, overflow, usePadding, onClick, styleName,
}) => {
  if (!overflow) {
    return (usePadding ? <div className={styles.padding} /> : null);
  }
  return (
    <Button styleName={`icon inline ${styleName}`} onClick={onClick}>
      <Icon glyph={`chevron-${side}`} width={18} height={18} />
    </Button>
  );
};

CarouselButton.propTypes = {
  usePadding: React.PropTypes.bool,
  side: React.PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: React.PropTypes.func.isRequired,
  overflow: React.PropTypes.bool.isRequired,
  styleName: React.PropTypes.string,
};

CarouselButton.defaultProps = {
  styleName: 'primary-3',
};

export default CarouselButton;
