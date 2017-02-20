import React from 'react';

import translate from '@quoine/translate';

import Spine from '@quoine/components/Spine';
import Color from '@quoine/components/Color';

const NewsSpine = () => (
  <Spine title={translate('news:spine-title')}>
    <Color styleName="primary-2">Latest: </Color>
    <Color styleName="primary-3">
      QUOINE Becomes a top 5 Bitcoin Exchange due to Increased
      JPY Trading
    </Color>
  </Spine>
);

export default NewsSpine;
