const documents = (form) => {
  const data = new FormData();
  data.append('id_document', form.id);
  data.append('proof_address', form.address);
  data.append('bank_statement', form.bank);
  data.append('corporation_document', form.corporation);
  return data;
};

export default documents;
