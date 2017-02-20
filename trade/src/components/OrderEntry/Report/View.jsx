import React from 'react';

import translate from '@quoine/translate';

import ReportWrapper from '@quoine/components/ReportWrapper';
import Info from '@quoine/components/InfoHorizontal';
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

const OrderEntryReport = ({ order, onSet }) => (
  <ReportWrapper onSet={onSet} id="order-add" layout="hero">
    <Info label={translate('order:id')}><Id order={order} /></Info>
    <Info label={translate('order:created-at')}><Created order={order} /></Info>
    <Hr />
    <Info label={translate('order:product')}><Product order={order} /></Info>
    <Info label={translate('order:side')}><Side order={order} /></Info>
    <Info label={translate('order:type')}><Type order={order} /></Info>
    <Info label={translate('order:price')}><Price order={order} /></Info>
    <Info label={translate('order:quantity')}><Quantity order={order} /></Info>
    <Hr />
    <Info label={translate('order:leverage')}><Leverage order={order} /></Info>
    <Info label={translate('order:margin')}><Margin order={order} /></Info>
    <Info label={translate('order:interest')}><Interest order={order} /></Info>
    <Hr />
    <Info label={translate('order:status')}><Status order={order} /></Info>
  </ReportWrapper>
);

OrderEntryReport.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  order: React.PropTypes.shape({}).isRequired,
};

export default OrderEntryReport;
