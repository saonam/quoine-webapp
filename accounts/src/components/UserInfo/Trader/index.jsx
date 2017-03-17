import React from 'react';

import Name from '../Name';
import Address from '../Address';

const UserInfoTrader = ({ trader, Item }) => (
  <div>
    <Item label="代表者と担当者は同一ですか">
      {trader.sameAsRep ? 'はい' : 'いいえ'}
    </Item>
    <Item label="担当者役職名">
      {trader.position}
    </Item>
    <Item label="担当者所属部署">
      {trader.department}
    </Item>
    {trader.nameKanji ? (
      <Item label="担当者氏名">
        <Name name={trader.nameKanji} />
      </Item>
    ) : null}
    {trader.nameKanji ? (
      <Item label="担当者氏名(フリガナ)">
        <Name name={trader.nameKana} />
      </Item>
    ) : null}
    <Item label="性別">
      {trader.gender}
    </Item>
    <Item label="ご住所">
      <Address address={trader.address} />
    </Item>
    <Item label="担当者電話番号">
      {trader.phone}
    </Item>
    <Item label="担当者メールアドレス">
      {trader.email}
    </Item>
  </div>
);

UserInfoTrader.propTypes = {
  trader: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoTrader;