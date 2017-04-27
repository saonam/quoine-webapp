import PropTypes from 'prop-types';
import React from 'react';

import OpenWrapper from '@quoine/components/OpenWrapper';
import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';

import t from '@quoine/translate';
import styles from './styles.css';

const RightButton = ({ onClose }) => (
  <Button styleName="inverse-light inline" onClick={onClose}>
    {t('hint:done')}
  </Button>
);

const HintModal = ({ open, onOpen, onClose, label, children, style, modalContent }) => (
  <span>
    <span className={styles.main} >
      <span className={styles.hint} style={style}>{children}</span>
      <button className={styles.label} onClick={onOpen} role="button">
        {label || <span className={styles.default}>(?)</span>}
      </button>
    </span>

    {modalContent && open && (
      <Modal
        isOpen
        contentLabel="hint modal"
        title={t('hint:title')}
        rightButton={<RightButton onClose={onClose} />}
      >
        {modalContent}
      </Modal>
    )}
  </span>
);

const Hint = ({ label, style, modalContent, ...others }) => (
  <OpenWrapper
    {...others}
    label={label} style={style}
    Element={HintModal}
    modalContent={modalContent}
  />
);

RightButton.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

HintModal.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onOpen: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node,
  style: React.PropTypes.shape({}),
  modalContent: React.PropTypes.element,
};

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node,
  style: PropTypes.shape({}),
  modalContent: PropTypes.element,
};

export default Hint;
