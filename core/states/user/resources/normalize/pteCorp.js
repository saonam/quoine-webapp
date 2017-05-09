import { getUserProfAttr } from './utils';

const pteCorp = (raw) => ({
  pteCorp: {
    name: getUserProfAttr(raw, 'business_name'),
    type: getUserProfAttr(raw, 'business_type'),
    address: raw.address,
    website: getUserProfAttr(raw, 'business_website'),
    tax: getUserProfAttr(raw, 'tax_id'),
    vat: getUserProfAttr(raw, 'vat_id'),
  },
});

export default pteCorp;
