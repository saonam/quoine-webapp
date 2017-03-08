import {
  getCollection, createCollectionSelector,
} from '@quoine/selectors/utils';

const getState = state => state.transactionBlotter;

export default createCollectionSelector([getState], getCollection);
