import { spawn } from 'redux-saga/effects';

import init from './init';
import watchAccountChange from './watchAccountChange';
import watchAdd from './watchAdd';
import watchEdit from './watchEdit';
import watchRemove from './watchRemove';
import watchVerify from './watchVerify';
import watchDismiss from './watchDismiss';

export default function* wdrAddressSaga() {
  yield [
    spawn(init),
    spawn(watchAccountChange),
    spawn(watchAdd),
    spawn(watchEdit),
    spawn(watchRemove),
    spawn(watchVerify),
    spawn(watchDismiss),
  ];
}
