import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import LogInForm from './login/LogInForm';

const ModalLoginForm = ({
  title, isOpen, onSubmit, error, closeModal, onGoogleClick, onFacebookClick,
}) => (
  <Modal toggle={closeModal} className="theme-light ltr-support login-modal-form" isOpen={isOpen}>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>
      <LogInForm
        onSubmit={onSubmit}
        errorMessage={error}
        form="modal_login"
        fieldUser="E-mail"
        typeFieldUser="email"
      />
      <div className="account__or">
        <p>Or Easily Using</p>
      </div>
      <div className="account__social">
        <Button
          className="account__social-btn account__social-btn--facebook"
          type="button"
          onClick={onFacebookClick}
        >
          <FacebookIcon />
        </Button>
        <Button
          className="account__social-btn account__social-btn--google"
          type="button"
          onClick={onGoogleClick}
        >
          <GooglePlusIcon />
        </Button>
      </div>
    </ModalBody>
  </Modal>
);

ModalLoginForm.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
  onGoogleClick: PropTypes.func,
  onFacebookClick: PropTypes.func,
};

ModalLoginForm.defaultProps = {
  title: '',
  error: '',
  isOpen: false,
  onSubmit: () => {},
  onGoogleClick: () => {},
  onFacebookClick: () => {},
};

export default ModalLoginForm;
