const one = raw => ({
  ...raw,
  status: raw.status.split('_').join('-'),
});

const all = raw => raw.map(one);

const add = raw => ({
  ...one(raw),
});

export default { one, all, add };
