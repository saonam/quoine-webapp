import React from 'react';

import Group from './Group';
import Item from './Item';
import Address from './Address';
import Occupation from './Occupation';
import Purpose from './Purpose';
import Experience from './Experience';
import Relation from './Relation';
import Name from './Name';
import Datee from './Datee';

const SignUpBody4JpReviewIndi = ({ form }) => (
  <div>
    <Group heading="個人情報">
      <Item label="名前（漢字）">
        <Name name={form.nameKanji} />
      </Item>
      <Item label="名前（カナ）">
        <Name name={form.nameKana} />
      </Item>
      <Item label="生年月日">
        <Datee value={form.birth} />
      </Item>
      <Item label="性別">
        {form.gender}
      </Item>
    </Group>

    <Group heading="連絡先">
      <Item label="住所">
        <Address address={form.address} />
      </Item>
      <Item label="電話番号">
        {form.phone}
      </Item>
    </Group>

    <Group heading="ご職業">
      <Item label="ご職業">
        <Occupation occupation={form.occupation} />
      </Item>
      <Item label="勤務先住所">
        <Address address={form.workAddress} />
      </Item>
      <Item label="電話番号">
        {form.workPhone}
      </Item>
    </Group>

    <Group heading="財務情報・投資経験">
      <Item label="主な収入源">
        {form.source}
      </Item>
      <Item label="年収">
        {form.income}
      </Item>
      <Item label="投資可能資産">
        {form.investable}
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

SignUpBody4JpReviewIndi.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewIndi;
