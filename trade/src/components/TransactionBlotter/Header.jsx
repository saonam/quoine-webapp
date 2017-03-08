import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const TransactionBlotterHeader = () => (
  <Header styleName="text center primary-1">
    {translate('trans:title')}
  </Header>
);

export default TransactionBlotterHeader;
