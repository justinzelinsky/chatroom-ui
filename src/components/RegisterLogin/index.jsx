import Login from 'components/Login';
import Register from 'components/Register';
import S from 'components/RegisterLogin/styled';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useDarkMode from 'state/hooks/useDarkMode';

function RegisterLogin () {
  const { darkModeClass } = useDarkMode();

  return (
    <S.TabsContainer className={darkModeClass}>
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
