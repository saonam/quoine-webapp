import {
  getCollection, createCollectionSelector,
} from '@quoine/selectors/utils';

const getState = state => state.orderBlotter;

export default createCollectionSelector([getState], getCollection);
