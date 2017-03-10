import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

const WdrBankButtonEdit = ({ onEdit }) => (
  <Button styleName="accent text full" onClick={onEdit}>
    {translate('bank:edit-action')}
  </Button>
);

WdrBankButtonEdit.propTypes = {
  onEdit: React.PropTypes.func.isRequired,
};

export default WdrBankButtonEdit;
