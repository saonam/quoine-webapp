import { quoine } from '@quoine/resources';

// eslint-disable-next-line import/prefer-default-export
export const request = ({ force, payload }) => (
  quoine.post('/authy/auth_token', {
    body: {
      ...payload,
      force_sms: force,
    },
    errorPrefix: 'tfa',
  })
);
