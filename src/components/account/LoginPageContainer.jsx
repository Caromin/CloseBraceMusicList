import React from 'react';
import 'whatwg-fetch';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';

import LoginPage from './LoginPage';

export class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);

    // bound functions
    this.attemptLogIn = this.attemptLogIn.bind(this);
  }

  async attemptLogIn(userData) {
    const { decrementProgressAction, incrementProgressAction } = this.props;

    // turn on spinnder
    incrementProgressAction();

    const loginResponse = await fetch(
      // where to contact
      '/api/authentication/login',
      // waht to send
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'applciation/json',
        },
        credentials: 'same-origin',
      },
    );

    console.log(loginResponse);

    // turn off spinner
    decrementProgressAction();
  }

  render() {
    return (
      <div>
        <LoginPage loginFunction={this.attemptLogIn} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgressAction: incrementProgress,
    decrementProgressAction: decrementProgress,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPageContainer);
