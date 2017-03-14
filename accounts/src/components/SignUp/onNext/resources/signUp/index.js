import { quoine } from '@quoine/resources';

import { isQUOINEJp } from 'components/SignUp/utils';

import normalize from './normalize';

const signUp = form => {
  const options = {
    body: normalize(form),
    useCache: false,
  };
  if (isQUOINEJp(form)) {
    options.vendorId = process.env.REACT_APP_QUOINEJP_ID;
  }
  return quoine.post('/users', options);
};

export default signUp;
