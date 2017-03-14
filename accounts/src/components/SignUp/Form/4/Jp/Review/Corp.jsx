import React from 'react';

import Group from './Group';
import Item from './Item';
import Address from './Address';
import Rep from './Rep';
import Shs from './Shs';
import Trader from './Trader';
import Purpose from './Purpose';
import Experience from './Experience';
import Relation from './Relation';
import Datee from './Datee';

const SignUpBody4JpReviewCorp = ({ form }) => (
  <div>
    <Item label="法人名">
      {form.name}
    </Item>
    <Item label="フリガナ">
      {form.nameKana}
    </Item>
    <Item label="ご住所">
      <Address address={form.address} />
    </Item>
    <Item label="電話番号">
      {form.phone}
    </Item>

    <Group heading="法人概要">
      <Item label="業種">
        {form.industry}
      </Item>
      <Item label="業務内容">
        {form.business}
      </Item>
      <Item label="設立年月">
        <Datee value={form.established} date={false} />
      </Item>
      <Item label="決算日">
        <Datee value={form.established} year={false} />
      </Item>
      <Item label="ホームページアドレス">
        {form.website}
      </Item>
    </Group>

    <Group heading="代表者(役職名)">
      <Rep rep={form.rep} />
    </Group>

    <Group heading="代表者(役職名)">
      <Shs shs={form.shs} />
    </Group>

    <Group heading="担当者（口座管理者）情報">
      <Trader trader={form.trader} />
    </Group>

    <Group heading="財務情報・投資経験">
      <Item label="事業体の年商">
        {form.incomeGross}
      </Item>
      <Item label="事業体の税抜き後年間所得">
        {form.incomeNet}
      </Item>
      <Item label="事業体の自己資本">
        {form.capital}
      </Item>
      <Item label="投資目的">
        <Purpose purpose={form.purpose} />
      </Item>
      <Item label="投資経験">
        <Experience experience={form.experience} />
      </Item>
    </Group>

    <Group heading="申込の経緯">
      <Item label="申込の経緯">
        <Relation relation={form.relation} />
      </Item>
    </Group>
  </div>
);

SignUpBody4JpReviewCorp.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewCorp;
