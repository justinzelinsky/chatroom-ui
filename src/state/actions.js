export const ADD_ADMIN_CHAT = 'ADD_ADMIN_CHAT';
export const ADD_CHAT = 'ADD_CHAT';
export const CHAT_HISTORY_CLEARED = 'CHAT_HISTORY_CLEARED';
export const CLEAR_CHAT_HISTORY = 'CLEAR_CHAT_HISTORY';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const PAGE_LOAD = 'PAGE_LOAD';
export const RECEIVED_ALL_USERS = 'RECEIVED_ALL_USERS';
export const RECEIVED_CHATS = 'RECEIVED_CHATS';
export const REGISTER = 'REGISTER';
export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const REQUEST_CHATS = 'REQUEST_CHATS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_DARK_MODE = 'SET_DARK_MODE';
export const SET_USERS_TYPING = 'SET_USERS_TYPING';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const USER_STARTS_TYPING = 'USER_STARTS_TYPING';
export const USER_STOPS_TYPING = 'USER_STOPS_TYPING';
export const UPDATE_ACTIVE_USERS = 'UPDATE_ACTIVE_USERS';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export function addAdminChat ({ message, ts, user }) {
  return {
    type: ADD_ADMIN_CHAT,
    payload: {
      isAdminChat: true,
      message,
      ts,
      user
    }
  };
}

export function addChat ({ isLocalMessage = true, message, ts, user }) {
  return {
    type: ADD_CHAT,
    payload: {
      isLocalMessage,
      isAdminChat: false,
      message,
      ts,
      user
    }
  };
}

export function chatHistoryCleared () {
  return {
    type: CHAT_HISTORY_CLEARED
  };
}

export function clearChatHistory () {
  return {
    type: CLEAR_CHAT_HISTORY
  };
}

export function clearCurrentUser () {
  return {
    type: CLEAR_CURRENT_USER
  };
}

export function hideNotification () {
  return {
    type: HIDE_NOTIFICATION
  };
}

export function login ({ email, password }) {
  return {
    type: LOGIN,
    payload: {
      email,
      password
    }
  };
}

export function logout () {
  return {
    type: LOGOUT
  };
}

export function pageLoad () {
  return {
    type: PAGE_LOAD
  };
}

export function receivedAllUsers (users){
  return {
    type: RECEIVED_ALL_USERS,
    payload: {
      users
    }
  };
}

export function receivedChats (chats){
  return {
    type: RECEIVED_CHATS,
    payload: {
      chats
    }
  };
}

export function register ({ name, email, password, passwordConfirmation }){
  return {
    type: REGISTER,
    payload: {
      name,
      email,
      password,
      passwordConfirmation
    }
  };
}

export function requestAllUsers (){
  return {
    type: REQUEST_ALL_USERS
  };
}

export function requestChats () {
  return {
    type: REQUEST_CHATS
  };
}

export function setCurrentUser (currentUser){
  return {
    type: SET_CURRENT_USER,
    payload: {
      currentUser
    }
  };
}

export function setDarkMode (isDarkMode){
  return {
    type: SET_DARK_MODE,
    payload: {
      isDarkMode
    }
  };
}

export function setUsersTyping (usersTyping){
  return {
    type: SET_USERS_TYPING,
    payload: {
      usersTyping
    }
  };
}

export function showNotification ({ message, variant = 'primary' }) {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      notification: {
        message,
        variant
      }
    }
  };
}

export function userStartsTyping (){
  return {
    type: USER_STARTS_TYPING
  };
}

export function userStopsTyping () {
  return {
    type: USER_STOPS_TYPING
  };
}

export function updateActiveUsers (users){
  return {
    type: UPDATE_ACTIVE_USERS,
    payload: {
      users
    }
  };
}

export function updateProfile ({ email, name }) {
  return {
    type: UPDATE_PROFILE,
    payload: {
      email,
      name
    }
  };
}

export default {
  addAdminChat,
  addChat,
  chatHistoryCleared,
  clearChatHistory,
  hideNotification,
  login,
  logout,
  pageLoad,
  receivedAllUsers,
  receivedChats,
  register,
  requestAllUsers,
  requestChats,
  setCurrentUser,
  setDarkMode,
  setUsersTyping,
  showNotification,
  updateActiveUsers,
  updateProfile,
  userStartsTyping,
  userStopsTyping
};
