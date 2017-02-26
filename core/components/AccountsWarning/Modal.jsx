import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const AccountsWarningModal = ({ onClose }) => (
  <Modal
    isOpen isLarge contentLabel={translate('accounts-warning:title')}
    title={translate('accounts-warning:title')}
  >
    <p className={styles.description}>
      {translate('accounts-warning:description')}
    </p>
    <div className={styles.submit}>
      <Button onClick={onClose}>
        {translate('accounts-warning:dismiss')}
      </Button>
    </div>
  </Modal>
);

AccountsWarningModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

export default AccountsWarningModal;
