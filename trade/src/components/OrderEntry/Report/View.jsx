import React from 'react';

import ReportWrapper from '@quoine/components/ReportWrapper';
import Hr from '@quoine/components/Hr';
import {
  Created,
  Id,
  Interest,
  Leverage,
  Margin,
  Price,
  Product,
  Quantity,
  Side,
  Status,
  Type,
} from 'components/Order';
import Field from './Field';

const OrderEntryReport = ({ order, onSet }) => (
  <ReportWrapper onSet={onSet} id="order-add" layout="hero">
    <Field id="id"><Id order={order} /></Field>
    <Field id="created-at"><Created order={order} /></Field>
    <Hr />
    <Field id="product"><Product order={order} /></Field>
    <Field id="side"><Side order={order} /></Field>
    <Field id="type"><Type order={order} /></Field>
    <Field id="price"><Price order={order} /></Field>
    <Field id="quantity"><Quantity order={order} /></Field>
    <Hr />
    <Field id="leverage"><Leverage order={order} /></Field>
    <Field id="margin"><Margin order={order} /></Field>
    <Field id="interest"><Interest order={order} /></Field>
    <Hr />
    <Field id="status"><Status order={order} /></Field>
  </ReportWrapper>
);

OrderEntryReport.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  order: React.PropTypes.shape({}).isRequired,
};

export default OrderEntryReport;
