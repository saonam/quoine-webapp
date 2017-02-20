import { spawn } from 'redux-saga/effects';

import init from './init';
import watchAdd from './watchAdd';
import watchRemove from './watchRemove';

export default function* saga() {
  yield [
    spawn(init),
    spawn(watchAdd),
    spawn(watchRemove),
  ];
}
