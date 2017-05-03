import { quoine } from '@quoine/resources';

const submit = ({ current, next }) => (
  quoine.post('/users/check_status', { useCache: true })
  .then(user => user.id)
  .then(id => (
    quoine.put(`/users/${id}/update_password`, {
      body: {
        old_password: current,
        password: next,
        password_confirmation: next,
      },
      errorPrefix: 'change-password',
    })
  ))
);

export default { submit };
