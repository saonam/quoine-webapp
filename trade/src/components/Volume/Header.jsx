import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const VolumeHeader = () => (
  <Header styleName="text center primary-1">
    {translate('volume:title')}
  </Header>
);

export default VolumeHeader;
