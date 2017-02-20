const migrate = (org) => {
  if (!org) { return {}; }

  // clone
  const state = {
    ...org,
  };

  try {
    // confirmations
    if (state.confirmations.prefs['withdrawal-account-remove']) {
      state.confirmations.prefs['wdr-bank-remove'] =
        state.confirmations.prefs['withdrawal-account-remove'];
      delete state.confirmations.prefs['withdrawal-account-remove'];
    }
    // panels
    if (state.panels.prefs.length !== 8) {
      delete state.panels;
    }
  } catch (e) {
    // do nothing
  }

  return state;
};

export default migrate;
