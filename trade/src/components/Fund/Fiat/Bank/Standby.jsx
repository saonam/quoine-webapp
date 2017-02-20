import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

const FundFiatBankSandby = ({ onOpen }) => (
  <div>
    <span>{translate('fund-bank:help-1')}</span>
    <Button styleName="inline text accent" onClick={onOpen}>
      {translate('fund-bank:open')}
    </Button>
  </div>
);

FundFiatBankSandby.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
};

export default FundFiatBankSandby;
