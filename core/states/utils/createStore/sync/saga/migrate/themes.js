const themes = (state) => {
  if (state.themes) {
    return state;
  }

  let themes = {};
  const oldTheme = state.theme;
  if (oldTheme) {
    themes.current = oldTheme;
  }

  return {
    ...state,
    themes,
  };
};

export default themes;
