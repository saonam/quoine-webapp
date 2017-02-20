const memoizeWithUpdate = (func, shouldSelectorUpdate) => {
  let lastArgs = null;
  let lastResult = null;
  return (...args) => {
    if (
      lastArgs === null ||
      lastArgs.length !== args.length ||
      shouldSelectorUpdate(lastArgs, args)
    ) {
      lastResult = func(...args);
    }
    lastArgs = args;
    return lastResult;
  };
};

export default memoizeWithUpdate;
