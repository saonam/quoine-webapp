import PropTypes from 'prop-types';
import React from 'react';

import BltItemEdit from 'components/BltItemEdit';

import Standby from './Standby';
import Form from './Form';
import Confirm from './Confirm';
import Err from './Err';

const PositionEditView = (props) => (
  <BltItemEdit
    {...props}
    {...{ Standby, Form, Confirm, Err }}
    modelName="order"
    right
  />
);

PositionEditView.propTypes = {
  order: PropTypes.shape({}).isRequired,
};

export default PositionEditView;
