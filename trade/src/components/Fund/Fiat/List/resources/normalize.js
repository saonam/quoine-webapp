const one = (raw, form) => ({
  id: raw.id,
  // fiat_funding hasn't currency in response
  account: form.account,
  status: raw.status.toLowerCase(),
  createdAt: raw.created_at,
  // ===
  bank: raw.bank_name,
  amount: Number(raw.amount),
  notes: raw.notes,
  // ===
  method: raw.ref_payment_id ? 'cash' : 'bank',
  guide: raw.payment_url,
  deadline: raw.payment_deadline,
});

const all = (raw, form) => (
  raw.models.map(item => one(item, form))
);

export default { all, one };
