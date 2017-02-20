import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const BalanceHeader = () => (
  <Header styleName="text center primary-1">
    {translate('balance:title')}
  </Header>
);

export default BalanceHeader;
