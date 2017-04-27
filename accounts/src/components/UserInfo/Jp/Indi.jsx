import PropTypes from 'prop-types';
import React from 'react';

import Address from './Address';
import Occupation from './Occupation';
import Purpose from './Purpose';
import Experience from './Experience';
import Relation from './Relation';
import Name from './Name';
import Datee from './Datee';

const UserInfoIndi = ({ info, Group, Item }) => (
  <div>
    <Item>
      <p>私は、日本以外に居住地国が無いことを確約します。</p>
      <p>私は、米国納税義務が無いことを確約します。</p>
    </Item>

    <Group heading="個人情報">
      <Item label="名前（漢字）">
        <Name name={info.nameKanji} />
      </Item>
      <Item label="名前（カナ）">
        <Name name={info.nameKana} />
      </Item>
      <Item label="生年月日">
        <Datee value={info.birth} />
      </Item>
      <Item label="性別">
        {info.gender}
      </Item>
      <Item>
        私は外国の重要な公人、もしくはその親族ではありません。
      </Item>
    </Group>

    <Group heading="連絡先">
      <Item label="住所">
        <Address address={info.address} />
      </Item>
      <Item label="電話番号">
        {info.phone}
      </Item>
    </Group>

    <Group heading="ご職業">
      <Item label="ご職業">
        <Occupation occupation={info.occupation} />
      </Item>
      <Item label="勤務先住所">
        <Address address={info.workAddress} />
      </Item>
      <Item label="電話番号">
        {info.workPhone}
      </Item>
    </Group>

    <Group heading="財務情報・投資経験">
      <Item label="主な収入源">
        {info.source}
      </Item>
      <Item label="年収">
        {info.income}
      </Item>
      <Item label="投資可能資産">
        {info.investable}
      </Item>
      {info.permission ? (
        <Item>
          投資可能資産は私自身の資産で間違えありません。
        </Item>
      ) : null}
      <Item label="投資目的">
        <Purpose purpose={info.purpose} />
      </Item>
      <Item label="投資経験">
        <Experience experience={info.experience} Item={Item} />
      </Item>
    </Group>

    <Group heading="申込の経緯">
      <Item label="申込の経緯">
        <Relation relation={info.relation} />
      </Item>
    </Group>

  </div>
);

UserInfoIndi.propTypes = {
  info: PropTypes.shape({}).isRequired,
  Group: PropTypes.func.isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoIndi;
