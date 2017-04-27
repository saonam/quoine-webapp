import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';
import Loading from '@quoine/components/LoadingIconWrapper';

import Body from './Body';

const WdrListView = ({ busy, withdrawals }) => (
  <div>
    <Header styleName="center text primary-1">
      {translate('withdrawal:pending-title')}
    </Header>
    {busy ? (
      <Loading />
    ) : (
      <Body withdrawals={withdrawals} />
    )}
  </div>
);

WdrListView.propTypes = {
  busy: PropTypes.bool,
  withdrawals: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WdrListView;
