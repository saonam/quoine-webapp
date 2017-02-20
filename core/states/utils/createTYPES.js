const createTYPES = (group, array = []) => (
  array.concat('APPLY').reduce((TYPES, key) => ({
    ...TYPES,
    [key]: `${group}_${key}`,
  }), {})
);

export default createTYPES;
