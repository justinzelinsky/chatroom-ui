import ChatInput from 'components/ChatInput';
import S from 'components/Chatroom/styled';
import Chats from 'components/Chats';
import UserList from 'components/UserList';
import React, { useEffect } from 'react';
import useSockets from 'utils/useSockets';

function Chatroom () {
  const handleClose = useSockets();

  useEffect(function () {
    return handleClose;
  }, [handleClose]);

  return (
    <S.Container fluid={true}>
      <S.ChatsUserListContainer>
        <Chats />
        <UserList />
      </S.ChatsUserListContainer>
      <ChatInput />
    </S.Container>
  );
}

export default Chatroom;
