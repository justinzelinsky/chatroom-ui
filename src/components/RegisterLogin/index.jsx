import './style.scss';

import classnames from 'classnames';
import Login from 'components/Login';
import Register from 'components/Register';
import React, { useMemo } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';

function RegisterLogin () {
  const darkMode = useSelector(state => state.darkMode);
  const registerLoginClassname = useMemo(function () {
    return classnames('register-login', { 'dark-mode': darkMode });
  }, [darkMode]);

  return (
    <div styleName={registerLoginClassname}>
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
