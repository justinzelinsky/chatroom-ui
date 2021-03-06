import { elementType } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function UnprotectedRoute ({ component: Component, ...rest }) {
  const { isAuthenticated } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chatroom" />
        )
      }
    />
  );
}

UnprotectedRoute.propTypes = {
  component: elementType.isRequired
};

export default UnprotectedRoute;
