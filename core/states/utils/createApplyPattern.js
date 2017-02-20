const createApplyPattern = (TYPES, option) => {
  // string pattern
  if (!option) { return TYPES.APPLY; }

  const isMatched = typeof option === 'string' ? (
    key => key === option
  ) : (
    key => option.indexOf(key) !== -1
  );

  const applyPattern = (action) => (
    action.type === TYPES.APPLY &&
    Object.keys(action.payload).some(isMatched)
  );

  return applyPattern;
};

export default createApplyPattern;
