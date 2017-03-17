import React from 'react';

import Address from '../Address';
import Name from '../Name';
import Datee from '../Datee';

const UserInfoShs = ({ shs, Item }) => (
  <div>
    {shs.map((sh, index) => (
      <div key={index}>
        <p>実質的支配者{index + 1}</p>
        <Item label="事業形態">
          {sh.business}
        </Item>
        <Item label="実質支配者に該当する方">
          {sh.type}
        </Item>
        <Item label="名前（漢字）">
          <Name name={sh.nameKanji} />
        </Item>
        <Item label="名前（カナ）">
          <Name name={sh.nameKana} />
        </Item>
        <Item label="生年月日">
          <Datee value={sh.birth} />
        </Item>
        <Item label="ご住所">
          <Address address={sh.address} />
        </Item>
        <Item>
          <p style={{ lineHeight: '24px' }}>
            ◯ 私は、日本以外に居住地国が無いことを確約します。また、居住地国に変更があった場合は、変更があった日から3ヶ月を経過する日までに異動届出書により申告します。
          </p>
        </Item>
        <Item>
          <p style={{ lineHeight: '24px' }}>
            ◯ 私は、米国納税義務が無いことを確約します。
          </p>
        </Item>
        <Item>
          <p style={{ lineHeight: '24px' }}>
            ◯ 私は外国の重要な公人、もしくはその親族ではありません。
          </p>
        </Item>
      </div>
    ))}
  </div>
);

UserInfoShs.propTypes = {
  shs: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoShs;
