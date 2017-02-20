import React from 'react';

import t from '@quoine/translate';

import Button from '@quoine/components/Button';

const AccountManageButton = ({ onOpen }) => (
  <Button styleName="text inline primary-3" onClick={onOpen}>
    {t('account-manage:action-manage')}
  </Button>
);

AccountManageButton.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
};

export default AccountManageButton;
