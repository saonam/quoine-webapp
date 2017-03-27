import React from 'react';

import Modal from './Modal';
import Button from './Button';

const AccountManageView = ({ open, onOpen, onClose }) => (
  <div>
    <Button onOpen={onOpen} />
    {open ? (
      <Modal onClose={onClose} />
    ) : null}
  </div>
);

AccountManageView.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onOpen: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default AccountManageView;
