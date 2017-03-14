import React from 'react';

import Item from '../Item';
import Name from '../Name';

const SignUpBody4JpReviewRep = ({ rep }) => (
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

SignUpBody4JpReviewRep.propTypes = {
  rep: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewRep;
