import { createSelector } from 'reselect';

import getAvailables from './getAvailableMarginProducts';
import getAddeds from './getAddedMarginProducts';

export default createSelector(
  [getAvailables, getAddeds], (availables, addeds) => (
    availables.filter(symbols => (
      addeds.indexOf(symbols) === -1
    ))
  ),
);
