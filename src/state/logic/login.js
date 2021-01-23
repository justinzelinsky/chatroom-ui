import jwt_decode from 'jwt-decode';
import { createLogic } from 'redux-logic';
import {
  hideNotification,
  LOGIN,
  requestAllUsers,
  requestChats,
  setCurrentUser,
  showNotification,
} from 'state/actions';

const loginLogic = createLogic({
  type: LOGIN,
  process: async function ({ action, post, setAuthToken }, dispatch, done) {
    dispatch(hideNotification());

    try {
      const { token } = await post('api/users/login', action.payload);
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);

      const user = jwt_decode(token);
      dispatch(setCurrentUser(user));
      dispatch(requestChats());
      dispatch(requestAllUsers());
    } catch (error) {
      dispatch(
        showNotification({
          message: error.message,
          variant: 'danger',
        })
      );
    } finally {
      done();
    }
  },
});

export default loginLogic;
