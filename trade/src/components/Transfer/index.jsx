import React from 'react';

import AccountWrapper from 'components/AccountWrapper';

import Body from './Body';

const Transfer = ({ type, Body: Element }) => (
  <AccountWrapper
    Body={Body}
    // pass along
    type={type}
    Element={Element}
  />
);

Transfer.propTypes = {
  type: React.PropTypes.oneOf(['fund', 'withdrawal']).isRequired,
  Body: React.PropTypes.func.isRequired,
};

export default Transfer;
