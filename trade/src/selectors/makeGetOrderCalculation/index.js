import getFxRates from '@quoine/selectors/getFxRates';
import getFees from 'selectors/getFees';

import createSelector from './createSelector';

import calculate from './calculate';

const getOrderBook = state => state.orderBook;
const getInterestBook = state => state.interestBook;
const getForm = (state, props) => props.form;

export default () => createSelector(
  [getForm, getOrderBook, getInterestBook, getFees, getFxRates],
  calculate,
);
