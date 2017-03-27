import init from './init';
import scheduleSet, { registerShape } from './scheduleSet';

export default function* sagas() {
  yield init();
  // wait for init to complete before set saga
  yield scheduleSet();
}
export { registerShape };
