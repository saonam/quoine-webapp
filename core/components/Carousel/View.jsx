import React from 'react';

import Button from './Button';

import styles from './styles.css';

const CarouselView = (props) => (
  <div className={styles.main}>
    <Button
      onClick={props.onLeft} side="left"
      usePadding={props.usePadding} overflow={props.overflow}
      styleName={props.styleName}
    />
    <div
      className={styles.outer}
      // outer need to manually sizing (to hide scrollbar properly)
      style={{ height: 12 * props.height }}
    >
      <div className={styles.inner} ref={props.onRef}>
        {props.children}
      </div>
    </div>
    <Button
      onClick={props.onRight} side="right"
      usePadding={props.usePadding} overflow={props.overflow}
      styleName={props.styleName}
    />
  </div>
);

CarouselView.propTypes = {
  children: React.PropTypes.node.isRequired,
  height: React.PropTypes.number.isRequired,
  usePadding: Button.propTypes.usePadding,
  // ===
  onLeft: React.PropTypes.func.isRequired,
  onRight: React.PropTypes.func.isRequired,
  onRef: React.PropTypes.func.isRequired,
  overflow: Button.propTypes.overflow,
  styleName: Button.propTypes.styleName,
};

export default CarouselView;
