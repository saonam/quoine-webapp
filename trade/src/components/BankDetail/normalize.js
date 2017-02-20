const normalize = (raw) => ({
  'account-name': raw.acc_name,
  'account-number': raw.acc_number,
  'account-type': raw.acc_type,
  'bank-address': raw.bank_address || raw.address,
  'bank-branch': raw.bank_branch || raw.branch,
  'bank-name': raw.bank || raw.name,
  'bank-swift': raw.swift,
  country: raw.country,
  currency: raw.currency,
  document: raw.bank_statement_filename ? 'uploaded' : null,
  id: raw.id,
  'joint-account': !!raw.joint_acc_name,
  'joint-account-name': raw.joint_acc_name,
  'joint-address': raw.joint_address,
  'joint-city': raw.joint_city,
  'joint-country': raw.joint_country,
  'joint-document-address': raw.proof_address_filename ? 'uploaded' : null,
  'joint-document-id': raw.id_document_filename ? 'uploaded' : null,
  reason: raw.reason_new_or_amendment,
  status: raw.status,
});

export default normalize;
