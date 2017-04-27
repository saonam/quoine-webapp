import PropTypes from 'prop-types';
import React from 'react';

import Pte from './Pte';
import Jp from './Jp';

const UserInfo = ({ info, ...others }) => {
  const Detail = info.underJFSA ? Jp : Pte;
  return (
    <Detail info={info} {...others} />
  );
};

UserInfo.propTypes = {
  info: PropTypes.shape({}).isRequired,
};

export default UserInfo;
