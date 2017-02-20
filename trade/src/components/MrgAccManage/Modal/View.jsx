import React from 'react';

import t from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import ModalList from '@quoine/components/ModalList';
import Button from '@quoine/components/Button';

import Add from '../Add';
import Visible from '../Visible';
import Hidden from '../Hidden';

const MrgAccManageModal = ({
  tradingMrgAccs, hiddenMrgAccs, remainMarginProducts, onClose,
}) => (
  <Modal
    isOpen isLarge contentLabel={t('mrg-acc-manage:title')}
    title={t('mrg-acc-manage:title')}
    rightButton={(
      <Button styleName="inverse-light inline" onClick={onClose}>
        {t('mrg-acc-manage:action-done')}
      </Button>
    )}
  >
    <ModalList
      modelKeys={tradingMrgAccs}
      title={t('mrg-acc-manage:trading-title')}
      description={t('mrg-acc-manage:trading-description')}
      Element={Visible}
    />
    <ModalList
      modelKeys={hiddenMrgAccs}
      title={t('mrg-acc-manage:hidden-title')}
      Element={Hidden}
    />
    <ModalList
      // remains
      modelKeys={remainMarginProducts}
      title={t('mrg-acc-manage:add-title')}
      description={t('mrg-acc-manage:add-description')}
      Element={Add}
    />
  </Modal>
);

MrgAccManageModal.propTypes = {
  tradingMrgAccs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  hiddenMrgAccs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  remainMarginProducts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default MrgAccManageModal;
