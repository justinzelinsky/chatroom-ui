import { useEffect } from 'react';
import useSockets from 'utils/useSockets';

import ChatInput from './ChatInput';
import Chats from './Chats';
import S from './styled';
import UserList from './UserList';

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
