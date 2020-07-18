import classnames from 'classnames';
import S from 'components/AdminPanel/styled';
import Button from 'components/UI/Button';
import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

function AdminPanel () {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const clearChatHistory = useCallback(function () {
    dispatch(actions.clearChatHistory());
  }, [dispatch]);

  const adminClassname = useMemo(function () {
    return classnames({ 'dark-mode': darkMode });
  }, [darkMode]);

  return (
    <S.Jumbotron className={adminClassname}>
      <S.Header>Admin Panel</S.Header>

      <Button onClick={clearChatHistory}>
        Clear Chat History
      </Button>
    </S.Jumbotron>
  );
}

export default AdminPanel;
