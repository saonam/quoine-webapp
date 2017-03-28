import getFees from 'selectors/getFees';
import getFxRates from 'selectors/getFxRates';

import createSelector from './createSelector';

import calculate from './calculate';

const getOrderBook = state => state.orderBook;
const getInterestBook = state => state.interestBook;
const getVendorConfig = state => state.vendorConfig;
const getForm = (state, props) => props.form;

export default () => createSelector(
  [getForm, getOrderBook, getInterestBook, getVendorConfig, getFees, getFxRates],
  calculate,
);
