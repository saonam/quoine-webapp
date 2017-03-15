import React from 'react';

import Common from './Common';
import Indi from './Indi';
import Corp from './Corp';

const UserInfo = ({ info, Group, Item }) => (
  <div>
    <Common info={info} Item={Item} />
    {info.type === 'individual' ? (
      <Indi info={info.jpIndi} Group={Group} Item={Item} />
    ) : (
      <Corp info={info.jpCorp} Group={Group} Item={Item} />
    )}
  </div>
);

UserInfo.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Group: React.PropTypes.func.isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfo;
