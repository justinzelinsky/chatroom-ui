import { useCallback, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { addAdminChat, addChat, setUsersTyping, updateActiveUsers } from 'state/actions';
import {
  closeSocket,
  emitAddedUser,
  openSocket,
  subscribeToAdminChatEvents,
  subscribeToChatEvents,
  subscribeToTypingEvents,
  subscribeToUserEvents
} from 'utils/Socket';

const documentTitle = document.title;
let unreadNotifications = 0;

function onDocumentFocus () {
  if (!document.hidden) {
    unreadNotifications = 0;
    document.title = documentTitle;
    document.removeEventListener('visibilitychange', onDocumentFocus);
  }
}

function useSockets ()  {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(function () {
    const { currentUser } = store.getState();

    openSocket();

    emitAddedUser(currentUser);

    subscribeToChatEvents(function (chat) {
      const { user, message, ts } = chat;
      dispatch(addChat({ isLocalMessage: false, message, ts, user }));

      if (document.hidden) {
        unreadNotifications++;
        document.title = `${documentTitle} (${unreadNotifications})`;
        document.addEventListener('visibilitychange', onDocumentFocus);
      }
    });

    subscribeToAdminChatEvents(chat => dispatch(addAdminChat(chat)));
    subscribeToTypingEvents(usersTyping => dispatch(setUsersTyping(usersTyping)));
    subscribeToUserEvents(usernames => dispatch(updateActiveUsers(usernames)));
  }, [dispatch, store]);

  const handleClose = useCallback(function () {
    closeSocket();
  }, []);

  return handleClose;
}

export default useSockets;
