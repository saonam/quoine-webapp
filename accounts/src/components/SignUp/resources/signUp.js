import { quoine } from '@quoine/resources';

import normalize from 'components/UserForm/normalize';

const signUp = ({ form, captcha }) => {
  const body = normalize(form);
  const options = {
    body: {
      ...body,
      ...{ recaptcha_response: captcha },
    },
    useCache: false,
    errorPrefix: 'sign-up',
  };
  if (form.underJFSA) {
    options.vendorId = process.env.REACT_APP_VENDOR_JFSA_ID;
  }
  return quoine.post('/users', options)
    .then(raw => ({
      id: raw.id,
    }));
};

export default signUp;
