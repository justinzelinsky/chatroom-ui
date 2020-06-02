import jwt_decode from 'jwt-decode';
import { createLogic } from 'redux-logic';
import {
  PAGE_LOAD,
  requestAllUsers,
  requestChats,
  setCurrentUser
} from 'state/actions';

const initialLoadLogic = createLogic({
  type: PAGE_LOAD,
  process ({ get, setAuthToken }, dispatch, done) {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      setAuthToken(jwtToken);
      get('/api/ping')
        .then(function () {
          try {
            const user = jwt_decode(jwtToken);

            dispatch(setCurrentUser(user));
            dispatch(requestChats());
            dispatch(requestAllUsers());
          } catch {
            console.log('Invalid token');
          }
        })
        .catch(function () {
          localStorage.removeItem('jwtToken');
          console.log('Expired token.');
        })
        .finally(function () {
          done();
        });
    } else {
      done();
    }
  }
});

export default initialLoadLogic;
