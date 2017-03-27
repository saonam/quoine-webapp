import trading from './trading';
import themes from './themes';
import languages from './languages';
import confirmations from './confirmations';
import orderEntry from './orderEntry';
import panels from './panels';
import charts from './charts';

const funcs = [
  trading,
  themes,
  languages,
  confirmations,
  orderEntry,
  panels, // TODO: migrate layout
  charts,
];

const migrate = (org) => {
  if (!org) { return {}; }

  // clone
  let state = {
    ...org,
  };

  try {
    funcs.forEach((func) => {
      state = func(state);
    });
  } catch (e) {
    throw e;
    // do nothing
  }

  return state;
};

export default migrate;
