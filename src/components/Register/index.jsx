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

function Register () {
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

  return (
    <FormContainer>
      <FormHeader>
        Register
      </FormHeader>
      <Form
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <FormGroup
          as={Row}
          controlId="register-name"
        >
          <FormLabel
            column={true}
            xs={3}
          >
            Name
          </FormLabel>
          <Col xs={9}>
            <Input onChange={onNameChange} />
          </Col>
        </FormGroup>

        <FormGroup
          as={Row}
          controlId="register-email"
        >
          <FormLabel
            column={true}
            xs={3}
          >
            Email address
          </FormLabel>
          <Col xs={9}>
            <Input
              onChange={onEmailChange}
              type="email"
            />
          </Col>
        </FormGroup>

        <FormGroup
          as={Row}
          controlId="register-password"
        >
          <FormLabel
            column={true}
            xs={3}
          >
            Password
          </FormLabel>
          <Col xs={9}>
            <Input
              onChange={onPasswordChange}
              type="password"
            />
          </Col>
        </FormGroup>

        <FormGroup
          as={Row}
          controlId="register-password-confirmation"
        >
          <FormLabel
            column={true}
            xs={3}
          >
            Password (again)
          </FormLabel>
          <Col xs={9}>
            <Input
              onChange={onPasswordConfirmationChange}
              type="password"
            />
          </Col>
        </FormGroup>

        <Button
          block={true}
          disabled={disableButton}
          type="submit"
          variant="primary"
        >
          Register
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Register;
