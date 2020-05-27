import './style.scss';

import classnames from 'classnames';
import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from 'state/actions';

function Login() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.darkMode);

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

  const loginClassame = useMemo(
    () => classnames('login-container', {
      'dark-mode': darkMode
    }),
    [darkMode]
  );

  return (
    <div styleName={loginClassame}>
      <h1 styleName="login-header">Login</h1>
      <Form
        autoComplete="off"
        styleName="login-form"
        onSubmit={handleOnSubmit}
      >
        <Form.Group
          as={Row}
          controlId="login-email"
        >
          <Form.Label
            column={true}
            sm={3}
          >
            Email address
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              autoFocus={true}
              onChange={onEmailChange}
              type="email"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="login-password"
        >
          <Form.Label
            column={true}
            sm={3}
          >
            Password
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={onPasswordChange}
              type="password"
            />
          </Col>
        </Form.Group>

        <Button
          block={true}
          disabled={disableButton}
          type="submit"
          variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
