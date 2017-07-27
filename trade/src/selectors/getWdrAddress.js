import { createSelector } from 'reselect';

const getCurrent = (state) => (state.wdrAddress.current);
const getAll = (state) => (state.wdrAddress.all);

const empty = { id: '', value: '' };

export default createSelector(
  [getCurrent, getAll],
  (current, all) => (
    all.find(item => item.id === current) || empty
  )
);
