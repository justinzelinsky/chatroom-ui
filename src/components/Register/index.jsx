import './style.scss';

import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

function Register() {
  const { darkMode } = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const disableButton = useMemo(
    () => !email || !name || !password || !passwordConfirmation || password !== passwordConfirmation,
    [email, name, password, passwordConfirmation]
  );

  const onNameChange = useCallback(event => setName(event.target.value), []);
  const onEmailChange = useCallback(event => setEmail(event.target.value), []);
  const onPasswordChange = useCallback(event => setPassword(event.target.value), []);

  const onPasswordConfirmationChange = useCallback(
    event => setPasswordConfirmation(event.target.value),
    []
  );

  const handleOnSubmit = useCallback(event => {
    event.preventDefault();

    if (!disableButton) {
      dispatch(
        actions.register({ name, email, password, passwordConfirmation })
      );
    }
  }, [disableButton, dispatch, name, email, password, passwordConfirmation]);

  const registerClassname = useMemo(() => classnames('register-container', {
    'dark-mode': darkMode
  }), [darkMode]);

  return (
    <div styleName={registerClassname}>
      <h1 styleName="register-header">
        Register
      </h1>
      <Form
        autoComplete="off"
        onSubmit={handleOnSubmit}
        styleName="register-form">
        <Form.Group
          as={Row}
          controlId="register-name"
        >
          <Form.Label
            column={true}
            xs={3}
          >
            Name
          </Form.Label>
          <Col xs={9}>
            <Form.Control onChange={onNameChange} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="register-email"
        >
          <Form.Label
            column={true}
            xs={3}
          >
            Email address
          </Form.Label>
          <Col xs={9}>
            <Form.Control
              onChange={onEmailChange}
              type="email"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="register-password"
        >
          <Form.Label
            column={true}
            xs={3}
          >
            Password
          </Form.Label>
          <Col xs={9}>
            <Form.Control
              onChange={onPasswordChange}
              type="password"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="register-password-confirmation"
        >
          <Form.Label
            column={true}
            xs={3}
          >
            Password (again)
          </Form.Label>
          <Col xs={9}>
            <Form.Control
              onChange={onPasswordConfirmationChange}
              type="password"
            />
          </Col>
        </Form.Group>

        <Button
          block={true}
          disabled={disableButton}
          type="submit"
          variant="primary">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
