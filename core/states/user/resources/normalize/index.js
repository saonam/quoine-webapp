import basic from './basic';
import pteIndi from './pteIndi';
import pteCorp from './pteCorp';
import jpIndi from './jpIndi';
import jpCorp from './jpCorp';

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
  const underJFSA = (
    Number(raw.app_vendor_id) === Number(process.env.REACT_APP_VENDOR_JFSA_ID)
  );
  const basicInfo = basic(raw);

  const operator = underJFSA ? 'jp' : 'pte';
  const detail = details[operator][raw.user_type] || pteIndi;
  const detailInfo = detail(raw);

  return ({
    ...basicInfo,
    ...detailInfo,
    underJFSA,
  });
};

export default normalize;
