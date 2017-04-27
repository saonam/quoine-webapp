import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import { withCondition } from 'components/OrderEntry/utils';

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
import Field from './Field';

const DirectionInfo = withCondition(
  ({ form }) => (
    <Field id="direction">
      <Direction order={form} />
    </Field>
  ), 'direction',
);

const DistanceInfo = withCondition(
  ({ form }) => (
    <Field id="distance">
      <Distance order={form} />
    </Field>
  ), 'distance',
);

const LeverageInfo = withCondition(
  ({ form }) => (
    <Field id="leverage">
      <Leverage order={form} />
    </Field>
  ), 'leverage',
);

const PriceInfo = withCondition(
  ({ form }) => (
    <Field id="price">
      <Price order={form} />
    </Field>
  ), 'price',
);

const QuantityInfo = withCondition(
  ({ form }) => (
    <Field id="quantity">
      <Quantity order={form} />
    </Field>
  ), 'quantity',
);

const QuantityDiscloseInfo = withCondition(
  ({ form }) => (
    <Field id="quantity-disclose">
      <Quantity order={form} type="disclose" />
    </Field>
  ), 'quantityDisclose',
);

const OrderEntryConfirmBody = ({ form, side }) => (
  <div>

    <Field id="product">
      <Product order={form} />
    </Field>
    <Field id="side">
      <ColorBySide side={side}>
        {translate(`order:side-${side}`)}
      </ColorBySide>
    </Field>
    <Field id="type">
      <Type order={form} />
    </Field>

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
  form: PropTypes.shape({}),
  side: PropTypes.oneOf(['buy', 'sell']).isRequired,
};

export default OrderEntryConfirmBody;
