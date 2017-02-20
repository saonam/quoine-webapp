const one = (raw) => ({
  id: raw.id,
  value: raw.token,
  permissions: Object.keys(raw.permissions || {})
    .filter(key => raw.permissions[key].length > 0)
    .map(key => ({
      name: key.replace('_', '-'),
      actions: raw.permissions[key],
    })),
});

const all = raw => raw.map(one);

const add = raw => Object.keys(raw)
  .reduce((byName, name) => ({
    ...byName,
    [name.replace('-', '_')]: Object.keys(raw[name])
      .reduce((byAction, action) => (
        raw[name][action] ? byAction.concat(action) : byAction
      ), []),
  }), {});

export default { one, all, add };
