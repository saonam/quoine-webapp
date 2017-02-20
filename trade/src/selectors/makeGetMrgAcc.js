import { createSelector } from 'reselect';

import prepareMrgAcc from 'selectors/utils/prepareMrgAcc';

const getRaw = (state, props) => (state.mrgAccs.models[props.name]);

export default () => createSelector(
  [getRaw], (raw) => prepareMrgAcc(raw)
);
