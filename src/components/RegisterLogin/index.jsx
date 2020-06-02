import './style.scss';

import Login from 'components/Login';
import Register from 'components/Register';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RegisterLogin() {
  return (
    <div styleName="register-login">
      <Tabs defaultActiveKey="login">
        <Tab
          eventKey="login"
          title="Login"
        >
          <Login />
        </Tab>
        <Tab
          eventKey="register"
          title="Register"
        >
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
}

export default RegisterLogin;
