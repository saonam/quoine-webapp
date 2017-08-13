import PropTypes from 'prop-types';
import React from 'react';

import Name from '../Name';
import Address from '../Address';
import Datee from '../Datee';

const UserInfoTrader = ({ trader, Item }) => (
  <div>
    <Item label="代表者と担当者は同一ですか">
      {(trader.sameAsRep === 'yes') ? 'はい' : 'いいえ'}
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

    <Item label="生年月日">
      <Datee value={trader.birth} />
    </Item>

    <Item label="性別">
      {trader.gender}
    </Item>

    {(trader.sameAsRep === 'no') && (
      <div>
        <Item>
          <p style={{ lineHeight: '24px' }}>
            ◯ 私は、米国納税義務が無いことを確約します。
          </p>
        </Item>
        <Item>
          <p style={{ lineHeight: '24px' }}>
            ◯ 私は、日本以外に居住地国が無いことを確約します。また、居住地国に変更があった場合は、変更があった日から3ヶ月を経過する日までに異動届出書により申告します。
          </p>
        </Item>
        <Item>
          <p style={{ lineHeight: '24px' }}>
            ◯ 私は外国の重要な公人、もしくはその親族ではありません。
          </p>
        </Item>
      </div>
    )}

    <Item label="ご住所">
      <Address address={trader.address} />
    </Item>
    <Item label="担当者携帯番号">
      {trader.phone}
    </Item>
    <Item label="担当者メールアドレス">
      {trader.email}
    </Item>
  </div>
);

UserInfoTrader.propTypes = {
  trader: PropTypes.shape({}).isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoTrader;
