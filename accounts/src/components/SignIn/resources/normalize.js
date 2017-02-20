const needToken = () => ({
  tokenRequired: true,
  token: null,
  tokenId: null,
});

const success = raw => ({
  tokenRequired: false,
  token: raw.token,
  tokenId: raw.id,
});

export default raw => (
  raw.token ? success(raw) : needToken(raw)
);
