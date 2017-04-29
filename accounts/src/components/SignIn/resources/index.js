import { quoine } from '@quoine/resources';
import normalize from './normalize';

const signInWoCode = ({ email, password }) => (
  quoine.post('/users/validate', {
    body: {
      user: { email, password },
    },
    useCache: false,
    errorPrefix: 'sign-in',
  })
);

const signInWCode = ({ email, password, code }) => (
  quoine.post('/users/sign_in', {
    body: {
      user: { email, password, auth_code: code },
    },
    useCache: false,
    errorPrefix: 'sign-in',
  })
);

const signIn = ({ email, password, code, step }) => (
  step === 1 ?
    signInWoCode({ email, password }) :
    signInWCode({ email, password, code })
).then(normalize);

export default { signIn };
