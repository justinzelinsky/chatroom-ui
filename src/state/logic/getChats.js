import { createLogic } from 'redux-logic';
import { receivedChats, REQUEST_CHATS } from 'state/actions';

const getChatsLogic = createLogic({
  type: REQUEST_CHATS,
  process: async function ({ get }, dispatch, done) {
    const chats = await get('/api/chats');
    dispatch(receivedChats(chats));
    done();
  },
});

export default getChatsLogic;
