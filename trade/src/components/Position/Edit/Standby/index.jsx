import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  edit: state.positionItem.edit,
});

export default connect(mapStateToProps)(View);
