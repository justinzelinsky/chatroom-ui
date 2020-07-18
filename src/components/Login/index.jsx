import Button from 'components/UI/Button';
import Form from 'components/UI/Form';
import FormContainer from 'components/UI/FormContainer';
import FormGroup from 'components/UI/FormGroup';
import FormHeader from 'components/UI/FormHeader';
import FormLabel from 'components/UI/FormLabel';
import Input from 'components/UI/Input';
import React, { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import actions from 'state/actions';

function Login () {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginDisabled = useMemo(function () {
    return !email || !password;
  }, [email, password]);

  const onEmailChange = useCallback(function (event) {
    setEmail(event.target.value);
  }, []);

  const onPasswordChange = useCallback(function (event) {
    setPassword(event.target.value);
  }, []);

  const handleOnSubmit = useCallback(function (event) {
    event.preventDefault();

    if (!loginDisabled) {
      dispatch(actions.login({ email, password }));
    }
  }, [loginDisabled, dispatch, email, password]);

  return (
    <FormContainer>
      <FormHeader>
        Login
      </FormHeader>
      <Form
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <FormGroup
          as={Row}
          controlId="login-email"
        >
          <FormLabel
            column={true}
            sm={3}
          >
            Email address
          </FormLabel>
          <Col sm={9}>
            <Input
              autoFocus={true}
              onChange={onEmailChange}
              type="email"
            />
          </Col>
        </FormGroup>

        <FormGroup
          as={Row}
          controlId="login-password"
        >
          <FormLabel
            column={true}
            sm={3}
          >
            Password
          </FormLabel>
          <Col sm={9}>
            <Input
              onChange={onPasswordChange}
              type="password"
            />
          </Col>
        </FormGroup>

        <Button
          block="true"
          disabled={loginDisabled}
          type="submit"
          variant="primary"
        >
          Login
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Login;
