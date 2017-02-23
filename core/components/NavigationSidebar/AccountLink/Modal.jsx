import React from 'react';

import t from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';

import styles from './styles.css';


const AccountLinkModal = ({ onClose }) => (
  <Modal
    isOpen isLarge contentLabel={t('menu:accounts-help-title')}
    title={t('menu:accounts-help-title')}
  >
    <p className={styles.description}>{t('menu:accounts-help')}</p>
    <div className={styles.submit}>
      <Button type="submit" className={styles.submitButton} onClick={onClose}>Dismiss</Button>
    </div>
  </Modal>
);

AccountLinkModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

export default AccountLinkModal;
