import jwt_decode from 'jwt-decode';
import { createLogic } from 'redux-logic';
import {
  hideNotification,
  requestAllUsers,
  setCurrentUser,
  showNotification,
  UPDATE_PROFILE,
} from 'state/actions';

const updateProfileLogic = createLogic({
  type: UPDATE_PROFILE,
  process: async function ({ action, post, setAuthToken }, dispatch, done) {
    try {
      const { token } = await post('api/users/update', action.payload);

      localStorage.setItem('jwtToken', token);
      setAuthToken(token);

      const user = jwt_decode(token);
      dispatch(setCurrentUser(user));
      dispatch(requestAllUsers());
      dispatch(
        showNotification({
          message: 'Profile updated!',
        })
      );
      setTimeout(function () {
        dispatch(hideNotification());
        done();
      }, 5000);
    } catch (error) {
      dispatch(
        showNotification({
          message: error.message,
          variant: 'danger',
        })
      );
      done();
    }
  },
});

export default updateProfileLogic;
