import { createLogic } from 'redux-logic';
import { ADD_CHAT } from 'state/actions';
import { emitNewChat } from 'utils/socket';

const addChatLogic = createLogic({
  type: ADD_CHAT,
  process ({ action }, _, done) {
    if (action.payload.isLocalMessage) {
      emitNewChat({ ...action.payload });
    }
    done();
  }
});

export default addChatLogic;
