import PropTypes from 'prop-types';
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
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FuturesActivate;
