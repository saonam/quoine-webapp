import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class WdrInputAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recents: [] };
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    this.onLoad();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.form.account !== this.props.form.account) {
      this.onLoad();
    }
  }
  onLoad() {
    this.props.onChange.address('');
    this.setState({ recents: [] });
    resources.load(this.props.form.account)
    .then(recents => {
      if (recents && recents[0]) {
        this.props.onChange.address(recents[0]);
        this.setState({ recents });
      }
    });
  }
  render() {
    const { form, onChange } = this.props;
    return (
      <View
        value={form.address} recents={this.state.recents}
        onChange={onChange.address}
      />
    );
  }
}

WdrInputAddress.propTypes = {
  form: PropTypes.shape({
    account: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.shape({
    address: PropTypes.func.isRequired,
  }).isRequired,
};

export default WdrInputAddress;
