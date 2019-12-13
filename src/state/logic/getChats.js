import { createLogic } from 'redux-logic';

import { REQUEST_CHATS, receivedChats } from 'state/actions';

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
