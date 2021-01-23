import {
  addAdminChat,
  addChat,
  chatHistoryCleared,
  hideNotification,
  receivedChats,
  setDarkMode,
  showNotification
} from 'state/actions';
import createRootReducer, {
  activeUsers,
  activeUsersInitialState,
  allUsers,
  allUsersInitialState,
  chats,
  chatsInitialState,
  currentUser,
  currentUserInitialState,
  darkMode,
  darkModeInitialState,
  notification,
  notificationInitialState
} from 'state/reducers';
import { formatDate } from 'utils/date';

describe('allUsers reducer', () => {
  it('should return the existing state for an unrelated action', () => {
    const state = {
      allUsers: allUsers(allUsersInitialState, {})
    };
    expect(state.allUsers).toEqual(allUsersInitialState);
  });
});

describe('currentUser reducer', () => {
  it('should return the existing state for an unrelated action', () => {
    const state = {
      currentUser: currentUser(currentUserInitialState, {})
    };
    expect(state.currentUser).toEqual(currentUserInitialState);
  });
});

describe('activeUsers reducer', () => {
  it('should return the existing state for an unrelated action', () => {
    const state = {
      activeUsers: activeUsers(activeUsersInitialState, {})
    };
    expect(state.activeUsers).toEqual(activeUsersInitialState);
  });
});

describe('chats reducer', () => {
  const chatList = [
    {
      message: 'Hello World',
      ts: new Date().valueOf(),
      user: {
        name: 'Justin'
      }
    },
    {
      message: 'Konnichiwa!',
      ts: new Date().valueOf(),
      user: {
        name: 'Justin-San'
      }
    },
    {
      message: 'Bonjour',
      ts: new Date().valueOf(),
      user: {
        name: 'Pierre'
      }
    }
  ];

  it('should return the existing state for an unrelated action', () => {
    const state = {
      chats: chats(chatsInitialState, {})
    };
    expect(state.chats).toEqual(chatsInitialState);
  });

  it('should update the chat array when a new chat is added', () => {
    const state = {
      chats: chats(chatsInitialState, {})
    };
    const user = {
      name: 'Justin'
    };
    const ts = new Date().valueOf();
    const chatMessage = 'Konnichiwa!';
    const state2 = {
      chats: chats(state.chats, addChat({ message: chatMessage, ts, user }))
    };
    expect(state2.chats).toHaveLength(1);
    expect(state2.chats[0].message).toEqual(chatMessage);
    expect(state2.chats[0].user).toEqual(user);
    expect(state2.chats[0].ts).toEqual(ts);
  });

  it('should update the chat array when a new admin chat is added', () => {
    const state = {
      chats: chats(chatsInitialState, {})
    };
    const user = {
      name: 'Justin'
    };
    const ts = new Date().valueOf();
    const chatMessage = 'Konnichiwa!';
    const state2 = {
      chats: chats(
        state.chats,
        addAdminChat({ message: chatMessage, ts, user })
      )
    };
    expect(state2.chats).toHaveLength(1);
    expect(state2.chats[0].message).toEqual(chatMessage);
    expect(state2.chats[0].user).toEqual(user);
    expect(state2.chats[0].ts).toEqual(ts);
    expect(state2.chats[0].isAdminChat).toEqual(true);
  });

  it('should return the initial state when no chats have been retrieved', () => {
    const state = {
      chats: chats(chatsInitialState, {})
    };
    const state2 = {
      chats: chats(state.chats, receivedChats([]))
    };
    expect(state2.chats).toHaveLength(0);
  });

  it('should update the chats array with all messages retrieved', () => {
    const state = {
      chats: chats(chatsInitialState, {})
    };
    const state2 = {
      chats: chats(state.chats, receivedChats(chatList))
    };
    expect(state2.chats).toHaveLength(4);

    const penultimateChat = state2.chats[state2.chats.length - 2];
    const penultimateChatTsFormatted = formatDate(penultimateChat.ts);

    const lastChat = state2.chats[state2.chats.length - 1];
    expect(lastChat.isAdminChat).toEqual(true);
    expect(lastChat.message).toEqual(
      `Last message sent at ${penultimateChatTsFormatted}`
    );
  });

  it('should clear the chat history', () => {
    const state = {
      chats: chats(chatsInitialState, {})
    };
    const state2 = {
      chats: chats(state.chats, receivedChats(chatList))
    };
    expect(state2.chats).toHaveLength(4);

    const state3 = {
      chats: chats(state2.chats, chatHistoryCleared())
    };
    expect(state3.chats).toEqual(chatsInitialState);
  });
});

describe('darkMode reducer', () => {
  it('should be off by default', () => {
    const state = {
      darkMode: darkMode(darkModeInitialState, {})
    };
    expect(state.darkMode).toEqual(false);
  });

  it('should be able to turn on when activated', () => {
    const state = {
      darkMode: darkMode(darkModeInitialState, {})
    };
    expect(state.darkMode).toEqual(false);
    const state2 = {
      darkMode: darkMode(state.darkMode, setDarkMode(true))
    };
    expect(state2.darkMode).toEqual(true);
  });
});

describe('notification reducer', () => {
  it('should return the existing state for an unrelated action', () => {
    const state = {
      notification: notification(notificationInitialState, {})
    };
    expect(state.notification).toEqual(notificationInitialState);
  });

  it('should display a notification', () => {
    const message = 'Hello, World!';
    const state = {
      notification: notification(
        notificationInitialState,
        showNotification({ message })
      )
    };
    expect(state.notification.message).toEqual(message);
    expect(state.notification.variant).toEqual('primary');

    const variant = 'warning';
    const state2 = {
      notification: notification(
        notificationInitialState,
        showNotification({ message, variant })
      )
    };
    expect(state2.notification.message).toEqual(message);
    expect(state2.notification.variant).toEqual(variant);
  });

  it('should hide a notification', () => {
    const message = 'Hello, World!';
    const state = {
      notification: notification(
        notificationInitialState,
        showNotification({ message })
      )
    };
    expect(state.notification.message).toEqual(message);

    const state2 = {
      notification: notification(state.notification, hideNotification())
    };
    expect(state2.notification).toEqual(notificationInitialState);
  });
});

describe('createRootReducer reducer', () => {
  it('should return a function', () => {
    const history = {};
    const rootReducer = createRootReducer(history);
    expect(typeof rootReducer).toEqual('function');
  });
});
