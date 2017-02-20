import React from 'react';

// import Button from '../Button';
// import Icon from '../Icon';

import styles from './styles.css';

const stop = (event) => {
  event.stopPropagation();
  return false;
};

const SidebarView = ({
  open, onOpen, onClose, Button, Body, side, overlayVisible,
}) => (
  <div>
    <Button onOpen={onOpen} />
    {open ? (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={styles[`overlay${
          overlayVisible ? '-visible' : '-invisible'
        }`]}
        onClick={onClose}
      >
        {
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div className={styles[`body-${side}`]} onClick={stop}>
            <Body onClose={onClose} />
          </div>
        }
      </div>
    ) : null}
  </div>
);

SidebarView.propTypes = {
  Button: React.PropTypes.func.isRequired,
  Body: React.PropTypes.func.isRequired,
  overlayVisible: React.PropTypes.bool,
  side: React.PropTypes.string.isRequired,
  // ==
  open: React.PropTypes.bool.isRequired,
  onOpen: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

SidebarView.defaultProps = {
  overlayVisible: true,
};

export default SidebarView;
