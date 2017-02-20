import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  state: state.panels,
});

export default connect(mapStateToProps)(Container);
