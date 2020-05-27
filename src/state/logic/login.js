import jwt_decode from 'jwt-decode';
import { createLogic } from 'redux-logic';
import {
  hideNotification,
  LOGIN,
  requestAllUsers,
  requestChats,
  setCurrentUser,
  showNotification
} from 'state/actions';

const loginLogic = createLogic({
  type: LOGIN,
  process({ action, post, setAuthToken }, dispatch, done) {
    dispatch(hideNotification());

    post('api/users/login', action.payload)
      .then(({ token }) => {
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const user = jwt_decode(token);
        dispatch(setCurrentUser(user));
        dispatch(requestChats());
        dispatch(requestAllUsers());
      })
      .catch(({ error }) =>
        dispatch(
          showNotification({
            message: error,
            variant: 'danger'
          })
        )
      )
      .finally(() => done());
  }
});

export default loginLogic;
