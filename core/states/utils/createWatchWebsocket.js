import { take, cancelled } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

const createChannel = resources => (
  payload => eventChannel((emit) => {
    resources.subscribe(payload, (event) => { emit(event); });
    return () => {
      resources.unsubscribe(payload);
    };
  })
);

const createWatchWebSocket = ({ resources, onUpdate }) => (
  function* watchWebSocket(payload) {
    const channel = createChannel(resources)(payload);
    try {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const model = yield take(channel);
        yield* onUpdate(model);
      }
    } finally {
      if (yield cancelled()) {
        channel.close();
      }
    }
  }
);

export default createWatchWebSocket;
