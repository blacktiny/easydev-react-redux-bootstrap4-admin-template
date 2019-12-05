import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import { auth, authError } from '../../../redux/actions/authActions';
import googleAuthSetting from '../../../config/google';

class AuthGoogleBtn extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      action: PropTypes.string.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  responseSuccess = (response) => {
    const { dispatch, history } = this.props;
    dispatch(auth({ name: response.profileObj.name, avatar: response.profileObj.imageUrl }));
    localStorage.setItem('easydev', response.accessToken);
    history.push('/dashboard_default');
  }

  responseError = (response) => {
    const { dispatch } = this.props;
    dispatch(authError(response.error));
  }


  render() {
    return (
      <GoogleLogin
        clientId={googleAuthSetting.client_id}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            type="button"
            className="account__social-btn account__social-btn--google"
          >
            <GooglePlusIcon />
          </button>
        )}
        onSuccess={this.responseSuccess}
        onFailure={this.responseError}
        cookiePolicy="single_host_origin"
      />
    );
  }
}

export default withRouter(connect()(AuthGoogleBtn));
