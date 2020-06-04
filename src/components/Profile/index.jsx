import './style.scss';

import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
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

  const profileClassname = useMemo(() => classnames('profile', { 'dark-mode': darkMode }), [darkMode]);
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
    <Jumbotron styleName={profileClassname}>
      <h1>Profile</h1>
      <Form
        autoComplete="off"
        onSubmit={handleProfileUpdate}
      >
        <Form.Group controlId="name">
          <Form.Label>
            Name:
          </Form.Label>
          <Form.Control
            autoFocus={true}
            onChange={onNameChange}
            type="text"
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>
            Email:
          </Form.Label>
          <Form.Control
            autoFocus={true}
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
