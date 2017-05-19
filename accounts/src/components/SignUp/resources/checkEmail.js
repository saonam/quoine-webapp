import { quoine } from '@quoine/resources';

const checkEmail = email => (
  quoine.post('/users/unique_email', {
    body: { email },
    useCache: false,
  }).then((response) => (
    response.exists ? (
      Promise.reject({
        status: 422,
        message: 'sign-up-error:email-has-already-been-taken',
      })
    ) : Promise.resolve()
  ))
);

export default checkEmail;
