const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short', day: '2-digit', year: 'numeric',
});

const getDate = (model) => (
  dateFormatter.format(model.createdAt * 1000)
);

const test = (filters, model) => (
  Object.keys(filters).every(key => (
    filters[key] === 'all' || model[key] === filters[key]
  ))
);

const getCollection = ({ keys, models, filters }) => {
  const collection = [];
  const dateToIndex = {}; // for performance boost
  keys.forEach(key => {
    const model = models[key];
    // filter
    if (!test(filters, model)) { return; }
    // group
    const date = getDate(model);
    const index = dateToIndex[date];
    if (typeof index === 'undefined') {
      dateToIndex[date] = collection.push({ date, keys: [key] }) - 1;
    } else {
      collection[index].keys.push(key);
    }
  });
  return collection;
};

export default getCollection;
