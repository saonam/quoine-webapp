import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const DEFAULTS_FALLBACK = {
  account: 'USD',
  product: 'BTCUSD',
  market: 'margin',
};

const DEFAULTS_BY_VENDOR = {
  qryptos: {
    account: 'BTC',
    product: 'ETHBTC',
    market: 'margin',
  },
};

const initialState =
  DEFAULTS_BY_VENDOR[process.env.REACT_APP_VENDOR] ||
  DEFAULTS_FALLBACK;

registerSyncShape('trading', true);

export default createReducer(TYPES, initialState);
