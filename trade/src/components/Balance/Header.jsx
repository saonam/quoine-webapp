import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const VolumesHeader = () => (
  <Header styleName="text center primary-1">
    {translate('balance:title')}
  </Header>
);

export default VolumesHeader;