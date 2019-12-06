import './style.scss';

import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Login from 'components/Login';
import Register from 'components/Register';

const RegisterLogin = () => (
  <div styleName="register-login">
    <Tabs defaultActiveKey="login">
      <Tab eventKey="login" title="Login">
        <Login />
      </Tab>
      <Tab eventKey="register" title="Register">
        <Register />
      </Tab>
    </Tabs>
  </div>
);

export default RegisterLogin;
