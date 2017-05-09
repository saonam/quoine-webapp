import { getUserProfAttr } from './utils';

const pteIndi = (raw) => ({
  pteIndi: {
    name: {
      first: raw.first_name,
      last: raw.last_name,
    },
    nationality: raw.nationality,
    birth: getUserProfAttr(raw, 'birthdate', 0),
    address: raw.address || '',
    income: getUserProfAttr(raw, 'other_source_income'),
    incomeJob: getUserProfAttr(raw, 'job_title'),
    incomeBusinessName: getUserProfAttr(raw, 'business_name'),
    incomeBusinessType: getUserProfAttr(raw, 'business_type'),
  },
});

export default pteIndi;
