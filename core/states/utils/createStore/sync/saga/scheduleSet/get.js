// shapes to sync, will be set by individual state. eg:
// {
//   languages: ['current'],
//   trading: true,
//   ...
// }
let shapes = {};
const registerShape = (name, shape) => {
  shapes = { ...shapes, [name]: shape };
};

// base styles to extend, will be set by sync saga init
let baseStates = {};
const setBase = (base) => { baseStates = base; };

// get the part of state that need to be sync,
// defined by shape (array of props)
const getSyncState = (state, shape) => {
  if (Array.isArray(shape)) {
    return shape.reduce((syncState, prop) => ({
      ...syncState, [prop]: state[prop],
    }), {});
  }
  if (typeof shape === 'function') {
    return shape(state);
  }
  return state;
};

const legacyStates = {
  current: {},
  confirmation: {},
  // orderForm,
  layout: {},
  // blotters: {},
  filters: {},
  blottersVertical: {},
  blottersHorizontal: {},
  // charts,
  // notification,
};

const getStates = (states) => {
  const syncStates = Object.keys(shapes)
    .reduce((_syncStates, name) => {
      const state = states[name];
      const shape = shapes[name];
      const syncState = getSyncState(state, shape);
      return { ..._syncStates, [name]: syncState };
    }, {});
  const fullStates = {
    // add legacy support
    ...legacyStates,
    ...baseStates,
    ...syncStates,
  };

  return fullStates;
};

export { registerShape, setBase };
export default getStates;

// export default {
//   languages: ['current'],
//   themes: ['current'],
//   accounts: ['hiddens'],
//   trading: true,
//   mrgAccs: ['hiddens', 'confirms', 'reports'],
//   panels: ['prefs'],
//   orderEntry: ['form', 'confirms', 'reports'],
//   tabs: true,
//   orderBlotter: ['filters'],
//   // orderItem: ['confirms', 'reports'],
//   // positionBlotter: ['filters'],
//   // positionItem: ['confirms', 'reports'],
//   executionBlotter: ['filters'],
//   // transactionBlotter: ['filters'],
// };
