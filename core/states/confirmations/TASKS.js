// Add task here
const TASKS = {
  ORDER_ADD: 'order-add',
  ORDER_CANCEL: 'order-cancel',
  ORDER_EDIT: 'order-edit',
  // ===
  POSITION_CLAIM: 'position-claim',
  POSITION_CLOSE: 'position-close',
  POSITION_EDIT: 'position-edit',
  // ===
  MRG_ACC_CLOSE: 'mrg-acc-close',
  // ===
  TOKEN_REMOVE: 'tokens-remove',
  // ===
  IP_REMOVE: 'ips-remove',
  // ===
  WDR_BANK_REMOVE: 'wdr-bank-remove',
  // ===
  WITHDRAWAL_CANCEL: 'withdrawal-cancel',
};

// ===
const CONFIRMS = (
  Object.keys(TASKS).reduce(
    (prev, key) => ({
      ...prev,
      [key]: `${TASKS[key]}-confirm`,
    }), {}
  )
);

// ===
const REPORTS = (
  Object.keys(TASKS).reduce(
    (prev, key) => ({
      ...prev,
      [key]: `${TASKS[key]}-report`,
    }), {}
  )
);

export { TASKS, CONFIRMS, REPORTS };
