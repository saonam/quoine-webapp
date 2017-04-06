import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const BalanceTotalHeader = () => (
  <Header styleName="text center primary-1">
    {translate('balance-total:title')}
  </Header>
);

export default BalanceTotalHeader;
