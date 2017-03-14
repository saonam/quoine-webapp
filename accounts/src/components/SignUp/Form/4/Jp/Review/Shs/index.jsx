import React from 'react';

import Item from '../Item';
import Address from '../Address';
import Name from '../Name';
import Datee from '../Datee';

const SignUpBody4JpReviewShs = ({ shs }) => (
  <div>
    {shs.map((sh, index) => (
      <div key={index}>
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
      </div>
    ))}
  </div>
);

SignUpBody4JpReviewShs.propTypes = {
  shs: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default SignUpBody4JpReviewShs;
