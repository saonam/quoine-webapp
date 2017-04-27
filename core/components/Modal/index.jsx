import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import styles from './styles.css';

const getParentNode = () => (
  document.querySelector('#app-modal')
);

const Modal = ({
  title, children, isNoOverlay, ...other,
  leftButton, rightButton, isLarge,
}) => (
  <ReactModal
    className={styles[`modal-${isLarge ? 'large' : 'default'}`]}
    overlayClassName={styles[`overlay-${isNoOverlay ? 'no' : 'default'}`]}
    parentSelector={getParentNode}
    {...other}
  >
    <div className={styles.header}>
      <div className={styles.leftButton}>
        {leftButton}
      </div>
      <h1 className={styles.title}>
        {title}
      </h1>
      <div className={styles.rightButton}>
        {rightButton}
      </div>
    </div>
    <div className={styles.body}>
      {children}
    </div>
  </ReactModal>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isNoOverlay: PropTypes.bool,
  isLarge: PropTypes.bool,
  leftButton: PropTypes.node,
  rightButton: PropTypes.node,
};

export default Modal;
