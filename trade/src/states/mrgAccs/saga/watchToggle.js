import { spawn } from 'redux-saga/effects';
import { createWatchToggle } from '@quoine/states/utils';

import TYPES from '../TYPES';

const watchToggleHidden = createWatchToggle({
  TYPES,
  stateName: 'mrgAccs',
  TOGGLE_TYPE: TYPES.TOGGLE_HIDDEN,
  propName: 'hiddens',
});

const watchToggleReport = createWatchToggle({
  TYPES,
  stateName: 'mrgAccs',
  TOGGLE_TYPE: TYPES.TOGGLE_REPORT,
  propName: 'reports',
});

const watchToggleConfirm = createWatchToggle({
  TYPES,
  stateName: 'mrgAccs',
  TOGGLE_TYPE: TYPES.TOGGLE_CONFIRM,
  propName: 'confirms',
});

export default function* watchShowHide() {
  yield [
    spawn(watchToggleHidden),
    spawn(watchToggleConfirm),
    spawn(watchToggleReport),
  ];
}
