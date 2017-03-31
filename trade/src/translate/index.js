import { init } from '@quoine/translate';

import en from './en-process.env.REACT_APP_VENDOR';
import ja from './ja-process.env.REACT_APP_VENDOR';
import zhcn from './zhcn-process.env.REACT_APP_VENDOR';
import zhtw from './zhtw-process.env.REACT_APP_VENDOR';

init({ en, ja, zhcn, zhtw });
