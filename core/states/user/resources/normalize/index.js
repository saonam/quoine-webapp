import { currentTermVersion } from '@quoine/components/Term/resources';

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

  const currentTermVersion = raw.current_term_version ? Number(raw.current_term_version) : 1;
  const latestTermVersion = raw.latest_term_version ? Number(raw.latest_term_version) : 1;

  const needConfirmNewTerm = underJFSA && (currentTermVersion !== latestTermVersion);

  return ({
    ...basicInfo,
    ...detailInfo,
    underJFSA,
    needConfirmNewTerm,
  });
};

export default normalize;
