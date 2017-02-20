import { quoine } from '@quoine/resources';

const forgotPassword = email => (
  quoine.post('/users/password', {
    body: {
      user: { email },
    },
    errorPrefix: 'forgot-password',
  })
);

export default { forgotPassword };
