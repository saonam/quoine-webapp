import React from 'react';

import Name from '../Name';

const UserInfoTrader = ({ trader, Item }) => (
  <div>
    <Item label="代表者と担当者は同一ですか">
      {trader.sameAsRep}
    </Item>
    <Item label="担当者役職名">
      {trader.position}
    </Item>
    <Item label="担当者所属部署">
      {trader.department}
    </Item>
    {trader.sameAsRep === 'no' ? (
      <Item label="担当者氏名">
        <Name name={trader.nameKanji} />
      </Item>
    ) : null}
    {trader.sameAsRep === 'no' ? (
      <Item label="担当者氏名(フリガナ)">
        <Name name={trader.nameKana} />
      </Item>
    ) : null}
    <Item label="性別">
      {trader.gender}
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
