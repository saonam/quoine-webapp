import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class FundFiatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busy: true };
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    this.onLoad();
  }
  componentDidUpdate(prevProps) {
    this.onLoad(prevProps.form);
  }
  onLoad(prevForm) {
    const { form } = this.props;
    if (
      prevForm &&
      form.account === prevForm.account &&
      form.method === prevForm.method
    ) { return; }

    this.setState({ busy: true });

    resources.load(form)
    .then((response) => {
      this.setState({ busy: false });
      this.props.onFundsChange(response);
    });
  }
  render() {
    return (
      <View
        busy={this.state.busy}
        funds={this.props.funds}
        form={this.props.form}
      />
    );
  }
}

FundFiatList.propTypes = {
  form: PropTypes.shape({}).isRequired,
  funds: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onFundsChange: PropTypes.func.isRequired,
};

export default FundFiatList;
