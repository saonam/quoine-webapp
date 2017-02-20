import { spawn } from 'redux-saga/effects';

import init from './init';
import watchAdd from './watchAdd';
import watchEdit from './watchEdit';
import watchRemove from './watchRemove';

export default function* wdrBankSaga() {
  yield [
    spawn(init),
    spawn(watchAdd),
    spawn(watchEdit),
    spawn(watchRemove),
  ];
}
