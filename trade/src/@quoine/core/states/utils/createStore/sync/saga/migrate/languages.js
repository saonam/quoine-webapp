const migrate = (state) => {
  if (state.languages) {
    return state;
  }

  const languages = {};
  const oldLanguage = state.language;
  if (oldLanguage) {
    languages.current = oldLanguage;
  }

  return {
    ...state,
    languages,
  };
};

export default migrate;
