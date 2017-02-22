import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities['mrg-acc-close-confirm'],
  reporting: state.confirmations.activities['mrg-acc-close-report'],
});

export default connect(mapStateToProps)(View);
