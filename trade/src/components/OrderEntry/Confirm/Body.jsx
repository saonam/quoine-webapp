import React from 'react';

import translate from '@quoine/translate';

import { withCondition } from 'components/OrderEntry/utils';

import Info from '@quoine/components/InfoHorizontal';
import Hr from '@quoine/components/Hr';
import ColorBySide from '@quoine/components/ColorBySide';
import {
  Type,
  Product,
  Direction,
  Distance,
  Leverage,
  Price,
  Quantity,
} from 'components/Order';
import Calculation from 'components/OrderCalculation';

const DirectionInfo = withCondition(
  ({ form }) => (
    <Info label={translate('order:direction')}>
      <Direction order={form} />
    </Info>
  ), 'direction',
);

const DistanceInfo = withCondition(
  ({ form }) => (
    <Info label={translate('order:distance')}>
      <Distance order={form} />
    </Info>
  ), 'distance',
);

const LeverageInfo = withCondition(
  ({ form }) => (
    <Info label={translate('order:leverage')}>
      <Leverage order={form} />
    </Info>
  ), 'leverage',
);

const PriceInfo = withCondition(
  ({ form }) => (
    <Info label={translate('order:price')}>
      <Price order={form} />
    </Info>
  ), 'price',
);

const QuantityInfo = withCondition(
  ({ form }) => (
    <Info label={translate('order:quantity')}>
      <Quantity order={form} />
    </Info>
  ), 'quantity',
);

const QuantityDiscloseInfo = withCondition(
  ({ form }) => (
    <Info label={translate('order:quantity-disclose')}>
      <Quantity order={form} type="disclose" />
    </Info>
  ), 'quantityDisclose',
);

const OrderEntryConfirmBody = ({ form, side }) => (
  <div>

    <Info label={translate('order:product')}>
      <Product order={form} />
    </Info>
    <Info label={translate('order:side')}>
      <ColorBySide side={side}>
        {translate(`order:side-${side}`)}
      </ColorBySide>
    </Info>
    <Info label={translate('order:type')}>
      <Type order={form} />
    </Info>

    <Hr />

    <PriceInfo form={form} />
    <QuantityInfo form={form} />
    <QuantityDiscloseInfo form={form} />
    <LeverageInfo form={form} />
    <DirectionInfo form={form} />
    <DistanceInfo form={form} />

    <Hr />

    <Calculation form={form} />
  </div>
);

OrderEntryConfirmBody.propTypes = {
  form: React.PropTypes.shape({}),
  side: React.PropTypes.oneOf(['buy', 'sell']).isRequired,
};

export default OrderEntryConfirmBody;
