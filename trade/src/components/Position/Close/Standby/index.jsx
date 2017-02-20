import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  close: state.positionItem.close,
});

export default connect(mapStateToProps)(View);
