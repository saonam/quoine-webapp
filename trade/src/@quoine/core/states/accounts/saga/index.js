import { spawn } from 'redux-saga/effects';

import init from './init';
import watchToggleHidden from './watchToggleHidden';
import watchAdd from './watchAdd';

export default function* saga() {
  yield [
    spawn(init),
    spawn(watchToggleHidden),
    spawn(watchAdd),
  ];
}
