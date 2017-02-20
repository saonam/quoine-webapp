import React from 'react';

import t from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';
import ButtonWLoading from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const FuturesActivateModal = ({ activating, onActivate, onClose }) => (
  <Modal
    isOpen contentLabel="futures activate modal"
    title={t('futures:activate-title')}
    leftButton={(
      <Button styleName="inline inverse-light" onClick={onClose}>
        {t('futures:activate-cancel')}
      </Button>
    )}
  >
    <p className={styles.description}>
      {t('futures:activate-description')}
    </p>
    <ButtonWLoading
      onClick={onActivate} busy={activating} styleName="modal accent"
    >
      {t('futures:activate-action')}
    </ButtonWLoading>
  </Modal>
);

FuturesActivateModal.propTypes = {
  activating: React.PropTypes.bool.isRequired,
  onActivate: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default FuturesActivateModal;
