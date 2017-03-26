import getFxRates from 'selectors/getFxRates';
import getFees from 'selectors/getFees';

import createSelector from './createSelector';

import calculate from './calculate';

const getOrderBook = state => state.orderBook;
const getInterestBook = state => state.interestBook;
const getVendorConfig = state => state.vendorConfig;
const getForm = (state, props) => props.form;
const getProducts = (state) => state.products;

export default () => createSelector(
  [getForm, getOrderBook, getInterestBook, getVendorConfig, getFees, getFxRates, getProducts],
  calculate,
);
