import { validateOrder } from 'selectors/utils';

import createSelector from './createSelector';

const getForm = (state, props) => props.form;
const getSide = (state, props) => props.side;
const getState = state => state;

export default () => createSelector(
  [getForm, getSide, getState], (form, side, state) => {
    const order = side ? { ...form, side } : form;
    return validateOrder(order, state);
  },
);
