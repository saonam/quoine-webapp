import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

const createWatchSetFilter = ({ TYPES, stateName }) => (
  function* watchSetFilter() {
    // eslint-disable-next-line no-constant-condition
    while (1) {
      const action = yield take(TYPES.SET_FILTER);
      const filters = yield select(state => state[stateName].filters);
      yield apply(TYPES, {
        filters: { ...filters, ...action.payload },
      });
    }
  }
);

export default createWatchSetFilter;
