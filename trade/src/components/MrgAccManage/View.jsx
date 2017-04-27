import PropTypes from 'prop-types';
import React from 'react';

import Modal from './Modal';
import Button from './Button';

import styles from './styles.css';

const MrgAccManageView = ({ open, onOpen, onClose }) => (
  <div className={styles.main}>
    <Button onOpen={onOpen} />
    {open ? (
      <Modal onClose={onClose} />
    ) : null}
  </div>
);

MrgAccManageView.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MrgAccManageView;
