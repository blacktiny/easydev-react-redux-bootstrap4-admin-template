import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as firebase from 'firebase/app';
import PropTypes from 'prop-types';
import ModalLoginForm from '../ModalLoginForm';
import { auth, authError } from '../../../redux/actions/authActions';

function withAuthFirebase(WrappedComponent) {
  class HocAuth extends Component {
    static propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func,
      }).isRequired,
      dispatch: PropTypes.func.isRequired,
    };

    state = {
      error: '',
      isOpen: false,
    };

    closeModal = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    }

    onSubmitFireBase = ({ username, password }) => {
      const { history, dispatch } = this.props;
      this.setState({ error: '' });
      firebase.auth().signInWithEmailAndPassword(username, password).then((res) => {
        dispatch(auth({ name: res.user.email }));
        history.push('/dashboard_mobile_app');
        this.setState({ isOpen: false });
      }).catch((error) => {
        this.setState({ error: error.message });
      });
    };

    onLoginGoogle = () => {
      const { history, dispatch } = this.props;
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((res) => {
          localStorage.setItem('easydev', res.credential.accessToken);
          dispatch(auth({ name: res.user.displayName, avatar: res.user.photoURL }));
          history.push('/dashboard_mobile_app');
        })
        .catch((error) => {
          dispatch(authError(error.message));
        });
    }

    onLoginFacebook = () => {
      const { history, dispatch } = this.props;
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((res) => {
          localStorage.setItem('easydev', res.credential.accessToken);
          dispatch(auth({ name: res.user.displayName, avatar: res.user.photoURL }));
          history.push('/dashboard_mobile_app');
        })
        .catch((error) => {
          dispatch(authError(error.message));
        });
    }

    changeIsOpenModalFireBase = () => {
      this.setState({ isOpen: true, error: '' });
    };

    render() {
      const { error, isOpen } = this.state;
      return (
        <div className="account">
          <ModalLoginForm
            title="Sign in with Firebase"
            isOpen={isOpen}
            error={error}
            form="log_in_modal"
            onSubmit={this.onSubmitFireBase}
            closeModal={this.closeModal}
            onGoogleClick={this.onLoginGoogle}
            onFacebookClick={this.onLoginFacebook}
          />
          <WrappedComponent {...this.props} changeIsOpenModalFireBase={this.changeIsOpenModalFireBase} />
        </div>
      );
    }
  }
  return connect()(withRouter(HocAuth));
}

export default withAuthFirebase;
