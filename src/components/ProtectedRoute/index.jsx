import { elementType } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import useCurrentUser from 'state/hooks/useCurrentUser';
function ProtectedRoute ({ component: Component, ...rest }) {
  const { isAuthenticated } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
ProtectedRoute.propTypes = {
  component: elementType.isRequired
};

export default ProtectedRoute;
