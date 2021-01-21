import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import {
  ADD_ADMIN_CHAT,
  ADD_CHAT,
  CHAT_HISTORY_CLEARED,
  CLEAR_CURRENT_USER,
  HIDE_NOTIFICATION,
  RECEIVED_ALL_USERS,
  RECEIVED_CHATS,
  SET_CURRENT_USER,
  SET_DARK_MODE,
  SET_USERS_TYPING,
  SHOW_NOTIFICATION,
  UPDATE_ACTIVE_USERS
} from 'state/actions';
import formatDate from 'utils/formatDate';

export const currentUserInitialState = null;
export function currentUser (state = currentUserInitialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...action.payload.currentUser
      };
    case CLEAR_CURRENT_USER:
      return currentUserInitialState;
    default:
      return state;
  }
}

export const activeUsersInitialState = [];
export function activeUsers (state = activeUsersInitialState, action) {
  return action.type === UPDATE_ACTIVE_USERS
    ? [...action.payload.users]
    : state;
}

export const allUsersInitialState = [];
export function allUsers (state = allUsersInitialState, action){
  return action.type === RECEIVED_ALL_USERS ? [...action.payload.users] : state;
}

export const chatsInitialState = [];
export function chats (state = chatsInitialState, action) {
  if (action.type === ADD_CHAT || action.type === ADD_ADMIN_CHAT) {
    return [
      ...state,
      {
        ...action.payload
      }
    ];
  }

  if (action.type === CHAT_HISTORY_CLEARED) {
    return chatsInitialState;
  }

  if (action.type === RECEIVED_CHATS) {
    const {
      payload: { chats }
    } = action;

    if (chats.length > 0) {
      const lastChat = chats[chats.length - 1];
      const lastChatTimestamp = formatDate(new Date(lastChat.ts));
      const lastChatSent = {
        isAdminChat: true,
        message: `Last message sent at ${lastChatTimestamp}`,
        ts: new Date().valueOf(),
        user: {
          name: 'Admin'
        }
      };
      return [...chats, lastChatSent];
    }
  }

  return state;
}

export const darkModeInitialState = false;
export function darkMode (state = darkModeInitialState, action)  {
  return action.type === SET_DARK_MODE ? action.payload.isDarkMode : state;
}

export const notificationInitialState = null;
export function notification (state = notificationInitialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return action.payload.notification;
    case HIDE_NOTIFICATION:
      return notificationInitialState;
    default:
      return state;
  }
}

export const usersTypingInitialState = [];
export function usersTyping (state = usersTypingInitialState, action) {
  return action.type === SET_USERS_TYPING ? action.payload.usersTyping : state;
}

export default function (history) {
  return combineReducers({
    activeUsers,
    allUsers,
    chats,
    currentUser,
    darkMode,
    notification,
    router: connectRouter(history),
    usersTyping
  });
}
