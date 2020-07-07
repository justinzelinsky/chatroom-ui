import classnames from 'classnames';
import S from 'components/AdminPanel/styled';
import React, { useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

function AdminPanel () {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const clearChatHistory = useCallback(function () {
    dispatch(actions.clearChatHistory());
  }, [dispatch]);

  const adminClassname = classnames({ 'dark-mode': darkMode });

  return (
    <S.Jumbotron className={adminClassname}>
      <h1>Admin Panel</h1>
      <hr />
      <h2>Chat History</h2>
      <Button onClick={clearChatHistory}>
        Clear Chat History
      </Button>
    </S.Jumbotron>
  );
}

export default AdminPanel;
