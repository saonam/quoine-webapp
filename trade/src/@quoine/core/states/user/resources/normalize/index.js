import basic from './basic';
import pteIndi from './pteIndi';
import pteCorp from './pteCorp';
import jpIndi from './jpIndi';
import jpCorp from './jpCorp';

const checkIsQuoineJapan = (vendorId) => (
  process.env.REACT_APP_VENDOR === 'quoine' &&
  Number(vendorId) === Number(process.env.REACT_APP_QUOINEJP_ID)
);

const details = {
  pte: {
    individual: pteIndi,
    corporate: pteCorp,
  },
  jp: {
    individual: jpIndi,
    corporate: jpCorp,
  },
};

const normalize = (raw) => {
  const isQuoineJapan = checkIsQuoineJapan(raw.app_vendor_id);
  const basicInfo = basic(raw);

  const operator = isQuoineJapan ? 'jp' : 'pte';
  const detail = details[operator][raw.user_type] || pteIndi;
  const detailInfo = detail(raw);

  return ({
    ...basicInfo,
    ...detailInfo,
    isQuoineJapan,
  });
};

export default normalize;
