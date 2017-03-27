import getReady from './getReady';
import activate from './activate';

const subscribe = (channel, table, handler) => getReady()
.then((response) => {
  if (!response) { return; }
  const { socket, handlers } = response;
  if (!socket) { return; }

  handlers[table] = handler;
  const message = { op: 'subscribe', args: [channel] };
  socket.send(JSON.stringify(message));
})
.catch((error) => {
  if (!error.forgive) { throw error; }
});

const unsubscribe = (channel, table) => getReady()
.then((response) => {
  if (!response) { return; }
  const { socket, handlers } = response;
  if (!socket) { return; }

  if (!handlers[table]) { return; }

  const message = { op: 'unsubscribe', args: [channel] };
  socket.send(JSON.stringify(message));

  delete handlers[table];
})
.catch((error) => {
  if (!error.forgive) { throw error; }
});

export { activate };

export default { subscribe, unsubscribe, getReady };
