import classnames from 'classnames';
import Button from 'components/UI/Button';
import Header from 'components/UI/Header';
import Jumbotron from 'components/UI/Jumbotron';
import { useCallback, useMemo } from 'react';
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
    <Jumbotron className={adminClassname}>
      <Header>
        Admin Panel
      </Header>
      <Button onClick={clearChatHistory}>
        Clear Chat History
      </Button>
    </Jumbotron>
  );
}

export default AdminPanel;
