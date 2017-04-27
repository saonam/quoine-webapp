import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

import Body from './Body';

// form.account === 'JPY' && form.method === 'cash' ? null : (
//     <div>
//       <Header styleName="center text primary-1">
//         {translate('fund:recent-title')}
//       </Header>
//       <Body busy={busy} funds={funds} />
//     </div>
//   )

const FundFiatListView = ({ busy, funds }) => (
  <div>
    <Header styleName="center text primary-1">
      {translate('fund:recent-title')}
    </Header>
    <Body busy={busy} funds={funds} />
  </div>
);

FundFiatListView.propTypes = {
  busy: PropTypes.bool,
  funds: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // form: React.PropTypes.shape({
  //   account: React.PropTypes.string.isRequired,
  //   method: React.PropTypes.string.isRequired,
  // }).isRequired,
};

export default FundFiatListView;
