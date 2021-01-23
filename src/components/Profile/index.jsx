import { Button, Form, FormGroup, FormLabel, Header, Input, Jumbotron } from 'components/UI';
import { useCallback, useMemo, useState } from 'react';
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
        <FormGroup controlId="name">
          <FormLabel>
            Name:
          </FormLabel>
          <Input
            autoFocus={true}
            className={darkModeClass}
            onChange={onNameChange}
            type="text"
            value={name}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>
            Email:
          </FormLabel>
          <Input
            autoFocus={true}
            className={darkModeClass}
            onChange={onEmailChange}
            type="text"
            value={email}
          />
        </FormGroup>
        <Button type="submit">
          Update Profile
        </Button>
      </Form>
    </Jumbotron>
  );
}

export default Profile;
