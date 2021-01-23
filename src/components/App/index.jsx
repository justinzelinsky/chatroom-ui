import LoadingSpinner from 'components/LoadingSpinner';
import Login from 'components/Login';
import NavigationBar from 'components/NavigationBar';
import NotificationBar from 'components/NotificationBar';
import Register from 'components/Register';
import { ProtectedRoute, UnprotectedRoute } from 'components/Routes';
import { Fragment, lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import actions from 'state/actions';

const AdminPanel = lazy(() => import('components/AdminPanel'));
const Chatroom = lazy(() => import('components/Chatroom'));
const Profile = lazy(() => import('components/Profile'));

function App () {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(actions.pageLoad());
  }, [dispatch]);

  return (
    <Fragment>
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
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
