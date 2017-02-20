import { createSelector } from 'reselect';

const getRaw = (state, props) => (state.positionBlotter.models[props.id]);

export default () => createSelector(
  [getRaw], (raw) => {
    if (!raw) { return undefined; }

    const quantity = raw.quantityClose + raw.quantityOpen;
    const pnl = raw.pnlClose + raw.pnlOpen;
    const pnlWFeeTotal = pnl + raw.feeTotal;
    const pnlWFeeClose = pnl + raw.feeClose;

    return { ...raw, pnl, quantity, pnlWFeeClose, pnlWFeeTotal };
  }
);
