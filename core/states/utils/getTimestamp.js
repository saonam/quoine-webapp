export default value => (
  Math.round(new Date(value).getTime() / 1000)
);
