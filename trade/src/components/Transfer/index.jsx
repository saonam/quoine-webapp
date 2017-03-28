import React from 'react';

import translate from '@quoine/translate';

import AccountWrapper from 'components/AccountWrapper';
import Body from './Body';

const Transfer = ({ type, Body: Element }) => (
  <AccountWrapper
    label={translate('transfer:account')}
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
