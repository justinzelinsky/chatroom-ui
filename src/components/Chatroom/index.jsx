import './style.scss';

import classnames from 'classnames';
import ChatInput from 'components/ChatInput';
import ChatMessage from 'components/ChatMessage';
import NoChats from 'components/NoChats';
import UserList from 'components/UserList';
import UserTyping from 'components/UserTyping';
import React, { useEffect, useMemo, useRef } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useSockets from 'utils/useSockets';

function Chatroom() {
  const { chats, darkMode } = useSelector(state => ({
    chats: state.chats,
    darkMode: state.darkMode
  }));
  const chatEndRef = useRef(null);
  const handleClose = useSockets();

  useEffect(() => {
    return handleClose;
  }, [handleClose]);

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  const chatsClassname = useMemo(() => classnames('chats', { 'dark-mode': darkMode }), [darkMode]);
  const userTypingIndex = useMemo(() => {
    return chats.length === 0 ? 1 : chats.length;
  }, [chats]);
  return (
    <Container
      fluid={true}
      styleName="chatroom"
    >
      <div styleName="chatroom-userlist-container">
        <ListGroup styleName={chatsClassname}>
          {chats.length === 0 && <NoChats />}
          {chats.map((chat, idx) => (
            <ChatMessage
              chat={chat}
              index={idx}
              key={idx}
            />
          ))}
          <UserTyping index={userTypingIndex} />
          <ListGroup.Item
            ref={chatEndRef}
            styleName="chat-end"
          />
        </ListGroup>
        <UserList />
      </div>
      <ChatInput />
    </Container>
  );
}

export default Chatroom;
