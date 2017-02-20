import * as resources from '../resources';

let lastStates = {};

const equalLast = (thisStates) => (
  Object.keys(thisStates).every(key => {
    if (!lastStates[key]) { return false; }

    const lastState = lastStates[key];
    const thisState = thisStates[key];
    return Object.keys(thisState).every(prop => (
      thisState[prop] === lastState[prop]
    ));
  })
);

const set = (thisStates) => {
  if (equalLast(thisStates)) { return; }
  lastStates = thisStates;

  // set local
  window.localStorage.setItem('sync-state', JSON.stringify(thisStates));

  // set remote
  resources.set(thisStates)
  // set remote might failed because un-authed, and that's ok
  .catch(() => {});
};

export default set;
