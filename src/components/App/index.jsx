import Login from 'components/Login';
import NavigationBar from 'components/NavigationBar';
import NotificationBar from 'components/NotificationBar';
import Playground from 'components/Playground';
import ProtectedRoute from 'components/ProtectedRoute';
import Register from 'components/Register';
import { LoadingSpinner } from 'components/UI';
import UnprotectedRoute from 'components/UnprotectedRoute';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Router, Switch } from 'react-router-dom';
import actions from 'state/actions';
import { history } from 'state/store';
import { GlobalStyle } from 'styles/globals';

const AdminPanel = lazy(() => import('components/AdminPanel'));
const Chatroom = lazy(() => import('components/Chatroom'));
const Profile = lazy(() => import('components/Profile'));

function App () {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(actions.pageLoad());
  }, [dispatch]);

  return (
    <Router history={history}>
      <GlobalStyle />
      <NavigationBar />
      <NotificationBar />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <ProtectedRoute
            component={Chatroom}
            path="/chatroom"
          />
          <ProtectedRoute
            component={AdminPanel}
            path="/admin"
          />
          <ProtectedRoute
            component={Profile}
            path="/profile"
          />
          <UnprotectedRoute
            component={Register}
            path="/register"
          />
          <UnprotectedRoute
            component={Login}
            path="/login"
          />
          <UnprotectedRoute
            component={Playground}
            path="/playground"
          />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
