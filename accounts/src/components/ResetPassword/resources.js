import { quoine } from '@quoine/resources';

const resetPassword = ({ password, token, captcha }) => (
  quoine.put('/users/password', {
    body: {
      recaptcha_response: captcha,
      user: {
        password,
        password_confirmation: password,
        reset_password_token: token,
      },
    },
    errorPrefix: 'reset-password',
  })
);

export default { resetPassword };
