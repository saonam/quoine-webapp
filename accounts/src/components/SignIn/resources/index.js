import { quoine } from '@quoine/resources';
import normalize from './normalize';

const signIn = ({ email, password, code, captcha, step }) => {
  const signInWCode = step === 2;
  const url = signInWCode ? '/users/sign_in' : '/users/validate';
  const user = { email, password };
  if (signInWCode) { user.auth_code = code; }

  return quoine.post(url, {
    body: { recaptcha_response: captcha, user },
    useCache: false,
    errorPrefix: 'sign-in',
  }).then(normalize);
};

export default { signIn };
