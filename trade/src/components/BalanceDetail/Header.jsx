import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const BalanceDetailHeader = () => (
  <Header styleName="text center primary-1">
    {translate('balance-detail:title')}
  </Header>
);

export default BalanceDetailHeader;
