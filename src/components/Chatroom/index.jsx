import classnames from 'classnames';
import ChatInput from 'components/ChatInput';
import ChatMessage from 'components/ChatMessage';
import NoChats from 'components/NoChats';
import UserList from 'components/UserList';
import UserTyping from 'components/UserTyping';
import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import useSockets from 'utils/useSockets';

import {
  ChatEnd,
  ChatroomUserlistContainer,
  StyledContainer,
  StyledListGroup
} from './styled';

function Chatroom () {
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

  const chatsClassname = useMemo(() => classnames({ 'dark-mode': darkMode }), [darkMode]);
  const userTypingIndex = useMemo(() => {
    return chats.length === 0 ? 1 : chats.length;
  }, [chats]);
  return (
    <StyledContainer fluid={true}>
      <ChatroomUserlistContainer>
        <StyledListGroup className={chatsClassname}>
          {chats.length === 0 && <NoChats />}
          {chats.map((chat, idx) => (
            <ChatMessage
              chat={chat}
              index={idx}
              key={idx}
            />
          ))}
          <UserTyping index={userTypingIndex} />
          <ChatEnd ref={chatEndRef}/>
        </StyledListGroup>
        <UserList />
      </ChatroomUserlistContainer>

      <ChatInput />
    </StyledContainer>
  );
}

export default Chatroom;
