import { spawn } from 'redux-saga/effects';

import watchResize from './watchResize';
import watchMove from './watchMove';
import watchSetLayout from './watchSetLayout';

export default function* sagas() {
  yield [
    spawn(watchResize),
    spawn(watchMove),
    spawn(watchSetLayout),
  ];
}
