import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

// {
//   "blotter-top": "order",
//   "blotter-bottom": "position",
//   "blotter-all": "order",
//   "asset-transfer": "fund",
// }

const initialState = {};

registerSyncShape('tabs', true);

export default createReducer(TYPES, initialState);
