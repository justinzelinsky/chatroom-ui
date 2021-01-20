import Button from 'components/UI/Button';
import Form from 'components/UI/Form';
import FormContainer from 'components/UI/FormContainer';
import FormGroup from 'components/UI/FormGroup';
import FormHeader from 'components/UI/FormHeader';
import FormLabel from 'components/UI/FormLabel';
import Input from 'components/UI/Input';
import { useCallback, useMemo, useState } from 'react';
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

  const registerDisabled = useMemo(
    function () {
      return !email || !name || !password || !passwordConfirmation || password !== passwordConfirmation;
    }, [email, name, password, passwordConfirmation]
  );

  const onNameChange = useCallback(function (event) {
    setName(event.target.value);
  }, []);
  const onEmailChange = useCallback(function (event) {
    setEmail(event.target.value);
  }, []);
  const onPasswordChange = useCallback(function (event) {
    setPassword(event.target.value);
  }, []);

  const onPasswordConfirmationChange = useCallback(function (event) {
    setPasswordConfirmation(event.target.value);
  }, []);

  const handleOnSubmit = useCallback(function (event) {
    event.preventDefault();

    if (!registerDisabled) {
      dispatch(
        actions.register({ name, email, password, passwordConfirmation })
      );
    }
  }, [registerDisabled, dispatch, name, email, password, passwordConfirmation]);

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
          disabled={registerDisabled}
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
