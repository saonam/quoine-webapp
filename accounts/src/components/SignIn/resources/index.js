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

const signIn = ({ email, password, code }) => (
  code ?
    signInWCode({ email, password, code }) :
    signInWoCode({ email, password })
).then(normalize);

export default { signIn };
