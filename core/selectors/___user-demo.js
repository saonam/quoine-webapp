import { createSelector } from 'reselect';

const getUser = state => state.user;

export default createSelector(
  [getUser], (user) => (
    user.email.indexOf('@sandbox.quoine.com') !== -1
  )
);
