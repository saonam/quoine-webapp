import pteIndi from './pteIndi';
import pteCorp from './pteCorp';
import jpIndi from './jpIndi';
import jpCorp from './jpCorp';

const handlers = {
  pte: {
    individual: pteIndi,
    corporate: pteCorp,
  },
  jp: {
    individual: jpIndi,
    corporate: jpCorp,
  },
};

const normalize = (form) => {
  const operator = form.underJFSA ? 'jp' : 'pte';
  const handler = handlers[operator][form.type];
  return handler(form);
};

export default normalize;
