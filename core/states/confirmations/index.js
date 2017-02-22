import saga from './saga';
import reducer from './reducer';
import { TASKS, CONFIRMS, REPORTS } from './TASKS';

export { default as TYPES } from './TYPES';

export { TASKS, CONFIRMS, REPORTS };
export default { reducer, saga };
