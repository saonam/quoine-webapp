import { quoine } from '@quoine/resources';
import body from 'components/UserForm/normalize';
import response from '@quoine/states/user/resources/normalize';

const submit = form => (
  quoine.put(`/users/${form.id}`, {
    body: { user: body(form) },
    errorPrefix: 'edit-user',
  }).then(raw => response(raw.user))
);

export default { submit };
