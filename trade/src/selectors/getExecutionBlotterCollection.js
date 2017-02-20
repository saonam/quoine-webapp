import {
  getCollection, createCollectionSelector,
} from '@quoine/selectors/utils';

const getState = state => state.executionBlotter;

export default createCollectionSelector([getState], getCollection);
