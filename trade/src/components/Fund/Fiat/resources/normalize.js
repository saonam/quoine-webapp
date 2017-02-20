import listNormalize from '../List/resources/normalize';

const isCash = (form) => (
  form.account === 'JPY' && form.method === 'cash'
);

// form now include account and method
const body = (form) => {
  const base = {
    amount: form.amount,
    currency: form.account,
  };
  return isCash(form) ? ({
    ...base,
    funding_method: 'CASH',
  }) : ({
    fund_info: {
      ...base,
      bank_name: form.bank,
      notes: form.notes,
      // INR
      transfer_type: (
        form.account === 'INR' ? form.INRTransfer : undefined
      ),
    },
  });
};

const response = (raw, form) => {
  const item = isCash(form) ? raw : raw.fund_info;
  return listNormalize.one(item, form);
};

export default { body, response };
