import React from 'react';

import Button from './Button';
import Modal from './Modal';

const FuturesActivate = ({ open, onOpen, onClose }) => (
  <div>
    <Button onOpen={onOpen} />
    {open ? (
      <Modal onClose={onClose} />
    ) : null}
  </div>
);

FuturesActivate.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onOpen: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default FuturesActivate;
