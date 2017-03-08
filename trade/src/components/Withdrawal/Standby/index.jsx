import React from 'react';

import Transfer from 'components/Transfer';
import Body from './Body';

const WithdrawalStandby = () => (
  <Transfer type="withdrawal" Body={Body} />
);

export default WithdrawalStandby;
