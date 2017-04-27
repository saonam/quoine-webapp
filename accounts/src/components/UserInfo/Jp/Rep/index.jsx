import PropTypes from 'prop-types';
import React from 'react';

import Name from '../Name';

const UserInfoRep = ({ rep, Item }) => (
  <div>
    <Item label="代表者(役職名)">
      {rep.title}
    </Item>
    <Item label="代表者氏名">
      <Name name={rep.nameKanji} />
    </Item>
    <Item label="代表者氏名(フリガナ)">
      <Name name={rep.nameKana} />
    </Item>
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
);

UserInfoRep.propTypes = {
  rep: PropTypes.shape({}).isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoRep;
