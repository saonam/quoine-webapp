import PropTypes from 'prop-types';
import React from 'react';

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
  Button: PropTypes.func.isRequired,
  Body: PropTypes.func.isRequired,
  overlayVisible: PropTypes.bool,
  side: PropTypes.string.isRequired,
  // ==
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

SidebarView.defaultProps = {
  overlayVisible: true,
};

export default SidebarView;
