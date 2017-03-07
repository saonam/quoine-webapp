import React from 'react';

import AccountWrapper from 'components/AccountWrapper';

import Body from './Body';

const Transfer = ({ Body: Element }) => (
  <AccountWrapper Body={Body} Element={Element} />
);

Transfer.propTypes = {
  Body: React.PropTypes.func.isRequired,
};

export default Transfer;
