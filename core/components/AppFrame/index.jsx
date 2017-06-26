import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  busy: state.languages.busy,
  theme: state.themes.current,
  user: state.user,
});

export default connect(mapStateToProps)(View);
