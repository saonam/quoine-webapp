import { select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import getTradingAccounts from 'selectors/getTradingAccounts';
import getTradingProducts from 'selectors/getTradingProducts';

import TYPES from '../TYPES';

const createValidateProp = ({ propName, getValids }) => (
  function* validateProp() {
    /* eslint-disable no-console */
    const current = yield select(state => state.trading[propName]);
    const valids = yield select(getValids);
    // seems not ready
    // if validation is not ready, we keep the current prop
    if (valids.length === 0) {
      // console.log(`validate ${propName} ${current}: not ready`);
      return;
    }
    // current is valids => ok to keep
    if (valids.indexOf(current) !== -1) {
      // console.log(`validate ${propName} ${current}: ok to keep`);
      return;
    }
    // if none of above => current is not valid => use first valids
    // console.log(
    //   `validate ${propName} ${current}: need change to ${valids[0]}`
    // );
    yield apply(TYPES, { [propName]: valids[0] });
  }
);

export const validateAccount = createValidateProp({
  getValids: getTradingAccounts,
  propName: 'account',
});

export const validateProduct = createValidateProp({
  getValids: getTradingProducts,
  propName: 'product',
});
