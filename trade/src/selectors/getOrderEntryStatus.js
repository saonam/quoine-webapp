import { getStatus, createStatusSelector } from '@quoine/selectors/utils';

const getState = state => state.orderEntry;

const getSubmitStatus = getStatus.bind(null, 'submit');

export default createStatusSelector([getState], getSubmitStatus);
