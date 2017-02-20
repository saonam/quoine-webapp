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
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  isNoOverlay: React.PropTypes.bool,
  isLarge: React.PropTypes.bool,
  leftButton: React.PropTypes.node,
  rightButton: React.PropTypes.node,
};

export default Modal;
