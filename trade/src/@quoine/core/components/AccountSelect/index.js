import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  accounts: state.accounts.keys,
});

export default connect(mapStateToProps)(View);
