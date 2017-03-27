// TODO
// Import `TASKS` from the same source with `@quoine/states/confirmations`
import { TASKS, CONFIRMS, REPORTS } from './TASKS';

const map = {
  'api-tokens-delete': 'TOKEN_REMOVE',
  'bank-account-delete': 'WDR_BANK_REMOVE',
  'order-cancel': 'ORDER_CANCEL',
  'order-create': 'ORDER_ADD',
  'order-edit': 'ORDER_EDIT',
  'position-claim': 'POSITION_CLAIM',
  'position-close': 'POSITION_CLOSE',
  'position-edit': 'POSITION_EDIT',
  'trd-acc-close': 'MRG_ACC_CLOSE',
  'withdrawal-cancel': 'WITHDRAWAL_CANCEL',
};

const add = (skips, key) => {
  if (skips.indexOf(key) !== -1) {
    return skips;
  }
  return skips.concat(key);
};

const confirmations = (state) => {
  if (state.confirmations && state.confirmations.skips) {
    return state;
  }

  let skips = [];

  // ===

  // * Old state's shape:
  // {
  //   prefs: {
  //     'order-edit': { confirm: true, report: true }
  //   },
  //   activites: {},
  // }
  // * Note: if skip, value will be set to `false`
  if (state.confirmations && state.confirmations.prefs) {
    const prefs = state.confirmations.prefs;
    Object.keys(TASKS).forEach(key => {
      const task = TASKS[key];
      const pref = prefs[task];
      if (pref && pref.confirm === false) {
        skips = add(skips, CONFIRMS[key]);
      }
      if (pref && pref.report === false) {
        skips = add(skips, REPORTS[key]);
      }
    });
  }

  // ===

  // * Old state's shape:
  // {
  //   confirm: {
  //     'order-edit': false,
  //   },
  //   finish: {
  //     'order-edit': false,
  //   },
  // };
  // * Note: if skip, value will be set to `true`
  const oldSkips = state.confirmation;
  if (oldSkips && oldSkips.confirm && oldSkips.finish) {
    const oldSkipsConfirm = oldSkips.confirm;
    const oldSkipsReport = oldSkips.finish;

    Object.keys(oldSkipsConfirm).forEach(key => {
      if (oldSkipsConfirm[key] === true) {
        const mapKey = map[key];
        skips = add(skips, CONFIRMS[mapKey]);
      }
    });

    Object.keys(oldSkipsReport).forEach(key => {
      if (oldSkipsReport[key] === true) {
        const mapKey = map[key];
        skips = add(skips, REPORTS[mapKey]);
      }
    });
  }

  return {
    ...state,
    confirmations: { skips },
  };
};

export default confirmations;
