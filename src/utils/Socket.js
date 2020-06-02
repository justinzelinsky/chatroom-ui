import openSocketClient from 'socket.io-client';

let socket = null;

export function subscribeToChatEvents (callback) {
  socket.on('new chat', chat => callback(chat));
}

export function subscribeToAdminChatEvents (callback) {
  socket.on('new admin chat', chat => callback(chat));
}

export function subscribeToUserEvents (callback) {
  socket.on('user joined', username => callback(username));
  socket.on('user left', username => callback(username));
}

export function subscribeToTypingEvents (callback) {
  socket.on('users typing', usersTyping => callback(usersTyping));
}

export function emitStartTyping (user) {
  socket.emit('user start typing', user);
}

export function emitStopTyping (user)  {
  socket.emit('user stop typing', user);
}

export function emitNewChat (chat) {
  socket.emit('new chat', chat);
}

export function emitAddedUser (username) {
  socket.emit('add user', username);
}

export function openSocket () {
  socket = openSocketClient(API_ADDRESS);
}

export function closeSocket () {
  socket.close();
}
