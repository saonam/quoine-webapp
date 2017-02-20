import Haikunator from 'haikunator';

const haikunator = new Haikunator({
  defaults: { delimiter: '.' },
});

const suffix = '@sandbox.quoine.com';

// TODO: in future we will checkEmail and loop until email is new
const generateEmail = () => (
  Promise.resolve({
    email: `${haikunator.haikunate()}${suffix}`,
    isFromPrev: false,
  })
);

const getEmailFromLocal = () => {
  const email = window.localStorage.getItem('account-demo') || '';
  return Promise.resolve({ email, isFromPrev: !!email });
};

const getEmail = mode => (
  mode === 'new' ? generateEmail() : getEmailFromLocal()
);

export default getEmail;
