import { spawn } from 'redux-saga/effects';

import watchToggle from './watchToggle';
import watchAdd from './watchAdd';
import watchClose from './watchClose';
import watchToInit from './watchToInit';
import watchToSubscribe from './watchToSubscribe';

export default function* mrgAccSaga() {
  yield [
    spawn(watchToggle),
    spawn(watchAdd),
    spawn(watchClose),
    spawn(watchToInit),
    spawn(watchToSubscribe),
  ];
}
