import pusher from './pusher';

// use to store current subscribes to avoid duplicate handler
const refs = {};

// name is channelName
export const subscribe = (name, event, handler) => {
  // check if channel subscribed or not
  const channel = refs[name] ? pusher.channel(name) : pusher.subscribe(name);
  // save to ref
  refs[name] = refs[name] || {};

  // check if event subscribed or not
  if (refs[name][event]) {
    throw new Error('WS: Event already subscribed');
  }

  channel.bind(event, handler);
  refs[name][event] = handler;

  // console.log('subscribe', name, event);
};

export const unsubscribe = (name, event) => {
  if (!refs[name]) {
    throw new Error('WS: Channel not found (haven\'t subscribed yet)');
  }

  const handler = refs[name][event];
  if (!handler) {
    throw new Error('WS: Event not found (haven\'t subscribed yet)');
  }

  // remove event
  const channel = pusher.channel(name);
  channel.unbind(event, handler);
  delete refs[name][event];
  // also unsubscribe if channel empty
  if (Object.keys(refs[name]).length === 0) {
    pusher.unsubscribe(name);
    delete refs[name];
  }

  // console.log('unsubscribe', name, event);
};
