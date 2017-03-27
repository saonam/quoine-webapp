const panels = (state) => {
  if (state.panels && state.panels.prefs && state.panels.prefs.length !== 8) {
    // eslint-disable-next-line no-param-reassign
    delete state.panels;
  }
  return state;
};

export default panels;
