import React from 'react';
import LockScreenForm from './components/LockScreenForm';

const Ava = `${process.env.PUBLIC_URL}/img/11.png`;

const LockScreen = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__profile">
          <img className="account__avatar" src={Ava} alt="" />
          <p className="account__name">Larry Boom</p>
          <p className="account__sub">Unlock your account</p>
        </div>
        <LockScreenForm onSubmit />
      </div>
    </div>
  </div>
);

export default LockScreen;
