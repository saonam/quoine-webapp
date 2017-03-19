import React from 'react';

import translate from '@quoine/translate';

const UserInfoPteCorp = ({ info, Item }) => (
  <div>
    <Item label={translate('sign-up-pc:name')}>
      {info.name}
    </Item>
    <Item label={translate('sign-up-pc:type')}>
      {info.type}
    </Item>
    <Item label={translate('sign-up-pc:address')}>
      {info.address}
    </Item>
    <Item label={translate('sign-up-pc:website')}>
      {info.website}
    </Item>
    <Item label={translate('sign-up-pc:tax-id')}>
      {info.tax}
    </Item>
    <Item label={translate('sign-up-pc:vat-id')}>
      {info.vat}
    </Item>
  </div>
);

UserInfoPteCorp.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoPteCorp;
