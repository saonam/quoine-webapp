const body = (form) => ({
  address: form.address.trim(),
  currency: form.account,
  auth_code: form.authCode,
});

const response = (raw) => ({
  id: raw.id,
  value: raw.address,
  currency: raw.currency,
  status: raw.status.replace(/_/g, '-'),
});

export default { body, response };
