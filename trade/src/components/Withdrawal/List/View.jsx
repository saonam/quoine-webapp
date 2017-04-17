import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';
import Loading from '@quoine/components/LoadingIconWrapper';

import Body from './Body';

const WdrListView = ({ busy, withdrawals }) => (
  <div>
    <Header styleName="center text primary-1">
      {translate('withdrawal:recent-title')}
    </Header>
    {busy ? (
      <Loading />
    ) : (
      <Body withdrawals={withdrawals} />
    )}
  </div>
);

WdrListView.propTypes = {
  busy: React.PropTypes.bool,
  withdrawals: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default WdrListView;
