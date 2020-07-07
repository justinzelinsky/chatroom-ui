import classnames from 'classnames';
import Button from 'components/Button';
import Input from 'components/Input';
import S from 'components/Profile/styled';
import React, { useCallback, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

function Profile () {
  const { currentUser, darkMode } = useSelector(state => ({
    currentUser: state.currentUser,
    darkMode: state.darkMode
  }));
  const dispatch = useDispatch();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const darkModeClassname = useMemo(() => classnames({ 'dark-mode': darkMode }), [darkMode]);
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
    <S.Jumbotron className={darkModeClassname}>
      <S.Header>
        Profile
      </S.Header>
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
            className={darkModeClassname}
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
            className={darkModeClassname}
            onChange={onEmailChange}
            type="text"
            value={email}
          />
        </Form.Group>
        <Button type="submit">
          Update Profile
        </Button>
      </Form>
    </S.Jumbotron>
  );
}

export default Profile;
