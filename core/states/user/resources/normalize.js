export default raw => ({
  id: raw.id,
  name: raw.name,
  email: raw.email,
  // ===
  fees: raw.custom_fees,
});

// const documents = (form) => {
//   const formData = new FormData();
//   if (form.idDocument.file.size) {
//     formData.append('id_document', form.idDocument.file);
//   }
//   if (form.proofAddress.file.size) {
//     formData.append('proof_address', form.proofAddress.file);
//   }
//   if (form.bankStatement.file.size) {
//     formData.append('bank_statement', form.bankStatement.file);
//   }
//   return formData;
// };

// const updatePassword = (data) => ({
//   old_password: data.oldPassword,
//   password: data.password,
//   password_confirmation: data.passwordConfirmation,
// });

// export default { one, documents, updatePassword };
