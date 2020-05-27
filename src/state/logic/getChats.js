import { createLogic } from 'redux-logic';
import { receivedChats, REQUEST_CHATS } from 'state/actions';

const getChatsLogic = createLogic({
  type: REQUEST_CHATS,
  process({ get }, dispatch, done) {
    get('/api/chats').then(chats => {
      dispatch(receivedChats(chats));
      done();
    });
  }
});

export default getChatsLogic;
