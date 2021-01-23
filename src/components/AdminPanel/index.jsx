import { Button, Header, Jumbotron } from 'components/UI';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'state/actions';
import useDarkMode from 'state/hooks/useDarkMode';

function AdminPanel () {
  const dispatch = useDispatch();

  const clearChatHistory = useCallback(function () {
    dispatch(actions.clearChatHistory());
  }, [dispatch]);

  const { darkModeClass } = useDarkMode();

  return (
    <Jumbotron className={darkModeClass}>
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
