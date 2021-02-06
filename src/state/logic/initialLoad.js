import jwt_decode from 'jwt-decode';
import { createLogic } from 'redux-logic';
import {
  PAGE_LOAD,
  requestAllUsers,
  requestChats,
  setCurrentUser,
} from 'state/actions';

const initialLoadLogic = createLogic({
  type: PAGE_LOAD,
  process: async function ({ get, setAuthToken }, dispatch, done) {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      setAuthToken(jwtToken);
      try {
        await get('/api/ping');
        try {
          const user = jwt_decode(jwtToken);

          dispatch(setCurrentUser(user));
          dispatch(requestChats());
          dispatch(requestAllUsers());
        } catch {
          console.log('Invalid token'); // eslint-disable-line
        }
      } catch {
        localStorage.removeItem('jwtToken');
        console.log('Expired token.'); // eslint-disable-line
      } finally {
        done();
      }
    } else {
      done();
    }
  },
});

export default initialLoadLogic;
