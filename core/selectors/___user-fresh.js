import { createSelector } from 'reselect';

const getUser = state => state.user;

export default createSelector(
  [getUser], (user) => {
    const created = user.createdAt * 1000;
    const current = Date.now();
    return current - created < 100000;
  }
);
