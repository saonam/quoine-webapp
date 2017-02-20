import {
  getCollection, createCollectionSelector,
} from '@quoine/selectors/utils';

const getState = state => state.transBlotter;

export default createCollectionSelector([getState], getCollection);
