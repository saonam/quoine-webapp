import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import ModalList from '@quoine/components/ModalList';
import Button from '@quoine/components/Button';

import Visible from '../Visible';
import Hidden from '../Hidden';
import Add from '../Add';

const AccountManageModal = ({ all, addeds, hiddens, onClose }) => (
  <Modal
    isOpen contentLabel="account manage modal"
    title={translate('account-manage:title')}
    rightButton={(
      <Button styleName="inverse-light inline" onClick={onClose}>
        {translate('account-manage:action-done')}
      </Button>
    )}
    // leftButton={(
    //   <Button styleName="inverse-light inline">
    //     {translate('account-manage:action-fund')}
    //   </Button>
    // )}
  >

    <ModalList
      // trading (actually it is more than just trading)
      // since it include accounts from other markets
      modelKeys={addeds.filter(currency => (
        hiddens.indexOf(currency) === -1
      ))}
      title={translate('account-manage:trading-title')}
      description={translate('account-manage:trading-description')}
      Element={Visible}
    />

    <ModalList
      modelKeys={hiddens}
      title={translate('account-manage:hidden-title')}
      Element={Hidden}
    />

    <ModalList
      // remains
      modelKeys={all.filter(currency => (
        addeds.indexOf(currency) === -1
      ))}
      title={translate('account-manage:add-title')}
      description={translate('account-manage:add-description')}
      Element={Add}
    />
  </Modal>
);

AccountManageModal.propTypes = {
  all: PropTypes.arrayOf(PropTypes.string).isRequired,
  addeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  hiddens: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AccountManageModal;
