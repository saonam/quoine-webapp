import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  language: state.languages.current,
});

export default connect(mapStateToProps, null)(Container);
