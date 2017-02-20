import React from 'react';

import resources from './resources';

import View from './View';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }
  componentDidMount() {
    resources.load().then(user => {
      this.setState({ user });
    });
  }
  onChangeStatus(status) {
    this.setState({
      user: {
        ...this.state.user,
        status,
      },
    });
  }
  render() {
    return (
      <View user={this.state.user} onChangeStatus={this.onChangeStatus} />
    );
  }
}

export default Profile;
