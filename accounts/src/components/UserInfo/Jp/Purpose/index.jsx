import PropTypes from 'prop-types';
import React from 'react';

const UserInfoPurpose = ({ purpose }) => (
  <ul>
    {purpose.exchange ? (
      <li>仮想通貨を購入して、国内外への送金、決済等のため</li>
    ) : null}
    {purpose.trade ? (
      <li>仮想通貨の価格変動による売買益のため</li>
    ) : null}
    {purpose.diversify ? (
      <li>分散投資をおこなうため</li>
    ) : null}
    {purpose.invest ? (
      <li>中・長期投資のため</li>
    ) : null}
  </ul>
);

UserInfoPurpose.propTypes = {
  purpose: PropTypes.shape({}).isRequired,
};

export default UserInfoPurpose;
