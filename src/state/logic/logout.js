import { createLogic } from 'redux-logic';
import { clearCurrentUser, LOGOUT } from 'state/actions';

const logoutLogic = createLogic({
  type: LOGOUT,
  process: async function ({ get, setAuthToken }, dispatch, done) {
    await get('api/users/logout');

    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(clearCurrentUser());
    done();
  },
});

export default logoutLogic;
