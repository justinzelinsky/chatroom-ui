import './style.scss';

import classnames from 'classnames';
import { bool, number, object, shape, string } from 'prop-types';
import React, { useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import formatDate from 'utils/formatDate';

function ChatMessage ({ chat, index }) {
  const darkMode = useSelector(state => state.darkMode);

  const chatVariant = useMemo(function() {
    if (darkMode) {
      return index % 2 ? 'primary' : 'info';
    }
    return index % 2 ? 'light' : 'dark';
  }, [darkMode, index]);

  const { isAdminChat, message, ts, user } = chat;

  const chatStyleName = useMemo(
    () => classnames('chat-message', {
      admin: isAdminChat
    }),
    [isAdminChat]
  );

  const timestamp = useMemo(
    () => formatDate(new Date(ts), true),
    [ts]
  );

  return (
    <ListGroup.Item styleName="chat" variant={chatVariant}>
      <div styleName="username-chat">
        <div styleName="username">{user.name}</div>
        <div styleName={chatStyleName}>{message}</div>
      </div>
      <div styleName="timestamp">{timestamp}</div>
    </ListGroup.Item>
  );
}

ChatMessage.propTypes = {
  chat: shape({
    isAdminChat: bool,
    message: string,
    ts: number,
    user: object
  }).isRequired,
  index: number
};

export default ChatMessage;
