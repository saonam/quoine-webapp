const migrateThemes = (state) => {
  if (state.themes) {
    return state;
  }

  const themes = {};
  const oldTheme = state.theme;
  if (oldTheme) {
    themes.current = oldTheme;
  }

  return {
    ...state,
    themes,
  };
};

export default migrateThemes;
