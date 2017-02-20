import { connect } from 'react-redux';

import View from './View';

// actually, this is a little too simple
// see MrgAccManage/Modal/index.js for a strict approach
const mapStateToProps = state => ({
  hiddens: state.accounts.hiddens,
  addeds: state.accounts.keys,
  all: state.currencies.keys,
});

export default connect(mapStateToProps)(View);
