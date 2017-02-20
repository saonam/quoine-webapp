import React from 'react';

import BltItemEdit from 'components/BltItemEdit';

import Standby from './Standby';
import Form from './Form';
import Confirm from './Confirm';
import Err from './Err';

const PositionCloseView = (props) => (
  <BltItemEdit
    {...props}
    {...{ Standby, Form, Confirm, Err }}
    target="quantityClose"
    modelName="position"
    color="negative"
    right
  />
);

export default PositionCloseView;
