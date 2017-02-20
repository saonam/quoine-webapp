import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  edit: state.orderItem.edit,
});

export default connect(mapStateToProps)(View);
