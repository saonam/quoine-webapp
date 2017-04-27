import { quoine } from '@quoine/resources';

import normalize from 'components/UserForm/normalize';

const signUp = form => {
  const options = {
    body: normalize(form),
    useCache: false,
    errorPrefix: 'sign-up',
  };
  if (form.underJFSA) {
    options.vendorId = process.env.REACT_APP_VENDOR_JFSA_ID;
  }
  return quoine.post('/users', options);
};

export default signUp;
