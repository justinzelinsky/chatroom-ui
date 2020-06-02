import { createLogic } from 'redux-logic';
import { chatHistoryCleared, CLEAR_CHAT_HISTORY } from 'state/actions';

import { hideNotification, showNotification } from '../actions';

const clearChatHistoryLogic = createLogic({
  type: CLEAR_CHAT_HISTORY,
  process ({ post }, dispatch, done) {
    post('/api/chats/clear')
      .then(function () {
        dispatch(chatHistoryCleared());
        dispatch(
          showNotification({
            message: 'Chat history cleared!'
          })
        );
        setTimeout(() => {
          dispatch(hideNotification());
          done();
        }, 5000);
      });
  }
});

export default clearChatHistoryLogic;
