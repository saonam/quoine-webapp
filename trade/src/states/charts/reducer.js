import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

// const modes = ['crypto-watch', 'trading-view'];

const initialState = {
  double: false,
  mode: process.env.REACT_APP_VENDOR === 'qryptos' ? 'trading-view' : 'crypto-watch',
};

export default createReducer(TYPES, initialState);
