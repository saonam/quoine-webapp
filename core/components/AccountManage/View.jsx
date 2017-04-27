import PropTypes from 'prop-types';
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
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AccountManageView;
