import { elementType } from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isUserAuthenticated } from 'state/selectors';

function ProtectedRoute ({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(isUserAuthenticated);

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
