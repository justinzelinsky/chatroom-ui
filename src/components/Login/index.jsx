import Button from 'components/Button';
import Form from 'components/Form';
import FormContainer from 'components/FormContainer';
import FormGroup from 'components/FormGroup';
import FormHeader from 'components/FormHeader';
import FormLabel from 'components/FormLabel';
import Input from 'components/Input';
import React, { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import actions from 'state/actions';

function Login () {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disableButton = useMemo(() => !email || !password, [email, password]);

  const onEmailChange = useCallback(event => setEmail(event.target.value), [setEmail]);
  const onPasswordChange = useCallback(event => setPassword(event.target.value), [setPassword]);
  const handleOnSubmit = useCallback(event => {
    event.preventDefault();

    if (!disableButton) {
      dispatch(actions.login({ email, password }));
    }
  }, [disableButton, dispatch, email, password]);

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
          disabled={disableButton}
          type="submit"
          variant="primary">
          Login
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Login;
