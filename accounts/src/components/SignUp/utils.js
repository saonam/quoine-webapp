// eslint-disable-next-line import/prefer-default-export
export const isQUOINEJp = (form) => (
  process.env.REACT_APP_VENDOR === 'quoine' && form.country === 'JP'
);
