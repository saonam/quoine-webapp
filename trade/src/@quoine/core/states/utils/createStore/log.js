const EXCLUDES = [
  // 'ORDER_BOOK_APPLY',
  // 'PRODUCTS_APPLY',
  // 'ACCOUNTS_APPLY',
];

// eslint-disable-next-line no-unused-vars
const log = store => next => (action) => {
  const result = next(action);
  if (EXCLUDES.indexOf(action.type) !== -1) {
    return result;
  }
  /* eslint-disable no-console */
  console.groupCollapsed(action.type);
  console.log('payload: ', action.payload);
  if (action.meta) {
    console.log('meta:    ', action.meta);
  }
  console.log('state:   ', store.getState());
  console.groupEnd();
  return result;
};

export default log;
