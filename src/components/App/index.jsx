import LoadingSpinner from 'components/LoadingSpinner';
import NavigationBar from 'components/NavigationBar';
import NotificationBar from 'components/NotificationBar';
import RegisterLogin from 'components/RegisterLogin';
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
            component={RegisterLogin}
            path="/"
          />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
