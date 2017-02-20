const confirmations = (state) => {
  const prefs = state.confirmations.prefs;
  // bad names
  ['withdrawal-account-remove', 'wd-bank-remove']
    .forEach((key) => {
      if (prefs[key]) {
        prefs['wdr-bank-remove'] = prefs[key];
        delete prefs[key];
      }
    });
  return state;
};

const panels = (state) => {
  if (state.panels.prefs.length !== 8) {
    delete state.panels;
  }
  return state;
};

const migrate = (org) => {
  if (!org) { return {}; }

  // clone
  let state = {
    ...org,
  };

  try {
    [confirmations, panels].forEach((func) => {
      state = func(state);
    });
  } catch (e) {
    // do nothing
  }

  return state;
};

export default migrate;
