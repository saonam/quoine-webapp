const documents = (form) => {
  const data = new FormData();
  data.append('id_document', form.id);
  data.append('proof_address', form.address);
  data.append('bank_statement', form.bank);
  return data;
};

export default documents;
