import jwt_decode from 'jwt-decode';
import { createLogic } from 'redux-logic';

import {
  hasErrors,
  hideNotification,
  UPDATE_PROFILE,
  requestAllUsers,
  setCurrentUser,
  showNotification
} from 'state/actions';

const updateProfileLogic = createLogic({
  type: UPDATE_PROFILE,
  process({ action, post, setAuthToken }, dispatch, done) {
    post('api/users/update', action.payload)
      .then(({ token }) => {
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const user = jwt_decode(token);
        dispatch(setCurrentUser(user));
        dispatch(requestAllUsers());
        dispatch(
          showNotification({
            message: 'Profile updated!'
          })
        );
        setTimeout(() => {
          dispatch(hideNotification());
          done();
        }, 5000);
      })
      .catch(err => {
        dispatch(hasErrors(err));
        done();
      });
  }
});

export default updateProfileLogic;
