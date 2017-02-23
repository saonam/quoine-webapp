const languages = (state) => {
  if (state.languages) {
    return state;
  }

  let languages = {};
  const oldLanguage = state.language;
  if (oldLanguage) {
    languages.current = oldLanguage;
  }

  return {
    ...state,
    languages,
  };
};

export default languages;
