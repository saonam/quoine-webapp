import React from 'react';
import Link from '@quoine/components/NavigationLink';

import Modal from './Modal';

const AccountLinkView = ({ open, onToggle }) => (
  <div>
    <Link onClick={onToggle}>account</Link>
    {open ? <Modal onClose={onToggle} /> : null}
  </div>
);

AccountLinkView.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default AccountLinkView;
