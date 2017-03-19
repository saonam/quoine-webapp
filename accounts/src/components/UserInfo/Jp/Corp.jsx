import React from 'react';

import Address from './Address';
import Rep from './Rep';
import Shs from './Shs';
import Trader from './Trader';
import Purpose from './Purpose';
import Experience from './Experience';
import Relation from './Relation';
import Datee from './Datee';

const UserInfoCorp = ({ info, Group, Item }) => (
  <div>
    <Item label="法人名">
      {info.name}
    </Item>
    <Item label="フリガナ">
      {info.nameKana}
    </Item>
    <Item label="ご住所">
      <Address address={info.address} />
    </Item>
    <Item label="電話番号">
      {info.phone}
    </Item>

    <Group heading="法人概要">
      <Item label="業種">
        {info.industry.type}
        {info.industry.detail ? ` - ${info.industry.detail}` : ''}
      </Item>
      <Item label="業務内容">
        {info.business}
      </Item>
      <Item label="設立年月">
        <Datee value={info.established} date={false} />
      </Item>
      <Item label="決算日">
        <Datee value={info.established} year={false} />
      </Item>
      <Item label="ホームページアドレス">
        {info.website}
      </Item>
    </Group>

    <Group heading="代表者(役職名)">
      <Rep rep={info.rep} Item={Item} />
    </Group>

    <Group heading="代表者(役職名)">
      <Shs shs={info.shs} Item={Item} />
    </Group>

    <Group heading="担当者（口座管理者）情報">
      <Trader trader={info.trader} Item={Item} />
    </Group>

    <Group heading="財務情報・投資経験">
      <Item label="事業体の年商">
        {info.incomeGross}
      </Item>
      <Item label="事業体の税抜き後年間所得">
        {info.incomeNet}
      </Item>
      <Item label="事業体の自己資本">
        {info.capital}
      </Item>
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

UserInfoCorp.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Group: React.PropTypes.func.isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoCorp;
