export default (data) => {
  const formData = new FormData();
  // account-name
  if (data['account-name']) {
    formData.append('bank_account[acc_name]', data['account-name']);
  }
  // bank-name
  if (data['bank-name']) {
    formData.append('bank_account[bank]', data['bank-name']);
  }
  // account-number
  if (data['account-number']) {
    formData.append('bank_account[acc_number]', data['account-number']);
  }
  // bank-address
  if (data['bank-address']) {
    formData.append('bank_account[address]', data['bank-address']);
  }
  // document-bank
  if (data.document.size) {
    formData.append('bank_account[bank_statement]', data.document);
  }
  // bank-branch
  if (data['bank-branch']) {
    formData.append('bank_account[bank_branch]', data['bank-branch']);
  }
  // bank-swift
  if (data['bank-swift']) {
    formData.append('bank_account[swift]', data['bank-swift']);
  }
  // reason
  if (data.reason) {
    formData.append('bank_account[reason_new_or_amendment]', data.reason);
  }
  // country
  if (data.country) {
    formData.append('bank_account[country]', data.country);
  }

  // joint-account
  if (data['joint-account']) {
    formData.append('bank_account[joint_account]', data['joint-account']);

    // joint-account-name
    if (data['joint-account-name']) {
      formData.append('bank_account[joint_acc_name]', data['joint-account-name']);
    }
    // joint-address
    if (data['joint-address']) {
      formData.append('bank_account[joint_address]', data['joint-address']);
    }
    // joint-country
    if (data['joint-country']) {
      formData.append('bank_account[joint_country]', data['joint-country']);
    }
    // joint-city
    if (data['joint-city']) {
      formData.append('bank_account[joint_city]', data['joint-city']);
    }
    // document-id
    if (data['joint-document-id'].size) {
      formData.append('bank_account[id_document]', data['joint-document-id']);
    }
    // proof address
    if (data['joint-document-address'].size) {
      formData.append('bank_account[proof_address]', data['joint-document-address']);
    }
  }
  return formData;
};
