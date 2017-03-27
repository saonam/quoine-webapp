import { createSelector } from 'reselect';

import prepareAccount from './utils/prepareAccount';

const getRaw = (state, props) => (
  state.accounts.models[props.currency]
);

export default () => createSelector(
  [getRaw], (raw) => prepareAccount(raw)
);
