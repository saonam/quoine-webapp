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
  </div>
);

UserInfoRep.propTypes = {
  rep: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoRep;
