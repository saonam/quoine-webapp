import React from 'react';

import t from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import ModalList from '@quoine/components/ModalList';
import Button from '@quoine/components/Button';

import Visible from '../Visible';
import Hidden from '../Hidden';
import Add from '../Add';

const AccountManageModal = ({ all, addeds, hiddens, onClose }) => (
  <Modal
    isOpen contentLabel="account manage modal"
    title={t('account-manage:title')}
    rightButton={(
      <Button styleName="inverse-light inline" onClick={onClose}>
        {t('account-manage:action-done')}
      </Button>
    )}
    // leftButton={(
    //   <Button styleName="inverse-light inline">
    //     {t('account-manage:action-fund')}
    //   </Button>
    // )}
  >
    <ModalList
      // trading (actually it is more than just trading)
      // since it include accounts from other markets
      modelKeys={addeds.filter(currency => (
        hiddens.indexOf(currency) === -1
      ))}
      title={t('account-manage:trading-title')}
      description={t('account-manage:trading-description')}
      Element={Visible}
    />
    <ModalList
      modelKeys={hiddens}
      title={t('account-manage:hidden-title')}
      Element={Hidden}
    />
    <ModalList
      // remains
      modelKeys={all.filter(currency => (
        addeds.indexOf(currency) === -1
      ))}
      title={t('account-manage:add-title')}
      description={t('account-manage:add-description')}
      Element={Add}
    />
  </Modal>
);

AccountManageModal.propTypes = {
  all: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  addeds: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  hiddens: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default AccountManageModal;
