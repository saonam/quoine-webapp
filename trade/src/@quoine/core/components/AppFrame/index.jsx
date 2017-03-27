import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  busy: state.languages.busy,
  theme: state.themes.current,
});

export default connect(mapStateToProps)(View);
