import { createLogic } from 'redux-logic';
import { receivedAllUsers, REQUEST_ALL_USERS } from 'state/actions';

const getAllUsersLogic = createLogic({
  type: REQUEST_ALL_USERS,
  process: async function ({ get }, dispatch, done) {
    const users = await get('/api/users');
    dispatch(receivedAllUsers(users));
    done();
  },
});

export default getAllUsersLogic;
