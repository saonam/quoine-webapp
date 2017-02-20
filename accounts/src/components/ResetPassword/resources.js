import { quoine } from '@quoine/resources';

const resetPassword = ({ password, token }) => (
  quoine.put('/users/password', {
    body: {
      user: {
        password,
        password_confirmation: password,
        reset_password_token: token,
      },
    },
    errorPrefix: 'sign-up',
  })
);

export default { resetPassword };
