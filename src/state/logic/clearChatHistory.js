import { createLogic } from 'redux-logic';
import { chatHistoryCleared, CLEAR_CHAT_HISTORY } from 'state/actions';
import { hideNotification, showNotification } from 'state/actions';

const clearChatHistoryLogic = createLogic({
  type: CLEAR_CHAT_HISTORY,
  process: async function ({ post }, dispatch, done) {
    await post('/api/chats/clear');
    dispatch(chatHistoryCleared());
    dispatch(
      showNotification({
        message: 'Chat history cleared!',
      })
    );
    setTimeout(function () {
      dispatch(hideNotification());
      done();
    }, 5000);
  },
});

export default clearChatHistoryLogic;
