import React from 'react';

import Pte from './Pte';
import Jp from './Jp';

const UserInfo = ({ info, ...others }) => {
  const Detail = info.isQuoineJapan ? Jp : Pte;
  return (
    <Detail info={info} {...others} />
  );
};

UserInfo.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
};

export default UserInfo;
