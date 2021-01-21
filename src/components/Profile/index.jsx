import Button from 'components/UI/Button';
import Header from 'components/UI/Header';
import Input from 'components/UI/Input';
import Jumbotron from 'components/UI/Jumbotron';
import { useCallback, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';
import useDarkMode from 'state/hooks/useDarkMode';

function Profile () {
  const { darkModeClass } = useDarkMode();
  const currentUser  = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const disableButton = useMemo(() => !name, [name]);
  const handleProfileUpdate = useCallback(function (event) {
    event.preventDefault();

    if (!disableButton) {
      dispatch(actions.updateProfile({ email, name }));
    }
  }, [disableButton, dispatch, email, name]);

  const onNameChange = useCallback(event => setName(event.target.value), []);
  const onEmailChange = useCallback(event => setEmail(event.target.value), []);

  return (
    <Jumbotron className={darkModeClass}>
      <Header>
        Profile
      </Header>
      <Form
        autoComplete="off"
        onSubmit={handleProfileUpdate}
      >
        <Form.Group controlId="name">
          <Form.Label>
            Name:
          </Form.Label>
          <Input
            autoFocus={true}
            className={darkModeClass}
            onChange={onNameChange}
            type="text"
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>
            Email:
          </Form.Label>
          <Input
            autoFocus={true}
            className={darkModeClass}
            onChange={onEmailChange}
            type="text"
            value={email}
          />
        </Form.Group>
        <Button type="submit">
          Update Profile
        </Button>
      </Form>
    </Jumbotron>
  );
}

export default Profile;
