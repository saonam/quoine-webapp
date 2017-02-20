import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities['tokens-remove'].confirming,
});

export default connect(mapStateToProps)(View);
