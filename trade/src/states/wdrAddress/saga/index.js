import { spawn } from 'redux-saga/effects';

import init from './init';
import watchAccountChange from './watchAccountChange';
import watchAdd from './watchAdd';
import watchRemove from './watchRemove';
import watchVerify from './watchVerify';
import watchDismiss from './watchDismiss';

export default function* wdrAddressSaga() {
  yield [
    spawn(init),
    spawn(watchAccountChange),
    spawn(watchAdd),
    spawn(watchRemove),
    spawn(watchVerify),
    spawn(watchDismiss),
  ];
}
