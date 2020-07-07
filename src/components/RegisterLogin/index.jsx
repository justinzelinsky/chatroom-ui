import classnames from 'classnames';
import Login from 'components/Login';
import Register from 'components/Register';
import S from 'components/RegisterLogin/styled';
import React, { useMemo } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';

function RegisterLogin () {
  const darkMode = useSelector(state => state.darkMode);
  const darkmodeClassname = useMemo(function () {
    return classnames({ 'dark-mode': darkMode });
  }, [darkMode]);

  return (
    <S.TabsContainer className={darkmodeClassname}>
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
    </S.TabsContainer>
  );
}

export default RegisterLogin;
