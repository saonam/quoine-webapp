import { spawn } from 'redux-saga/effects';

import watchResize from './watchResize';
import watchMove from './watchMove';

export default function* sagas() {
  yield [
    spawn(watchResize),
    spawn(watchMove),
  ];
}
