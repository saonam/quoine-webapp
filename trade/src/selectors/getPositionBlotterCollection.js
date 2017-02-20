import {
  getCollection, createCollectionSelector,
} from '@quoine/selectors/utils';

const getState = state => state.positionBlotter;

export default createCollectionSelector([getState], getCollection);
