import { createSelector } from 'reselect';

import prepareAccount from '@quoine/selectors/utils/prepareAccount';

const getRaw = (state) => (state.accounts.models[state.trading.account]);

export default createSelector(
  [getRaw], (raw) => prepareAccount(raw)
);
