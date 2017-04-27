import PropTypes from 'prop-types';
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
  usePadding: PropTypes.bool,
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
  overflow: PropTypes.bool.isRequired,
  styleName: PropTypes.string,
};

CarouselButton.defaultProps = {
  styleName: 'primary-3',
};

export default CarouselButton;
