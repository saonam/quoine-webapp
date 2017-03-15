import basic from './basic';
import jpIndi from './jpIndi';
import jpCorp from './jpCorp';

const checkIsQuoineJapan = (vendorId) => (
  process.env.REACT_APP_VENDOR === 'quoine' &&
  Number(vendorId) === Number(process.env.REACT_APP_QUOINEJP_ID)
);

const normalize = (raw) => {
  const isQuoineJapan = checkIsQuoineJapan(raw.app_vendor_id);
  const basicInfo = basic(raw);
  let jpInfo = {};
  if (isQuoineJapan) {
    jpInfo = raw.user_type === 'individual' ? jpIndi(raw) : jpCorp(raw);
  }

  return ({
    ...basicInfo,
    ...jpInfo,
    isQuoineJapan,
  });
};

export default normalize;
