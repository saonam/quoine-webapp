import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/NavigationLink';

import Modal from './Modal';

const AccountLinkView = ({ open, onToggle }) => (
  <div>
    <Link onClick={onToggle}>{translate('menu:accounts')}</Link>
    {open ? <Modal onClose={onToggle} /> : null}
  </div>
);

AccountLinkView.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AccountLinkView;
