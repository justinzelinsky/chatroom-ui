import { createLogic } from 'redux-logic';

import { LOGOUT, clearCurrentUser } from 'state/actions';

const logoutLogic = createLogic({
  type: LOGOUT,
  process({ get, setAuthToken }, dispatch, done) {
    get('api/users/logout').then(() => {
      localStorage.removeItem('jwtToken');
      setAuthToken(false);
      dispatch(clearCurrentUser());
      done();
    });
  }
});

export default logoutLogic;
