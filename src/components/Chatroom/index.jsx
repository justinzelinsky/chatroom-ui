import useSockets from 'state/hooks/useSockets';

import ChatInput from './ChatInput';
import Chats from './Chats';
import S from './styled';
import UserList from './UserList';

function Chatroom () {
  useSockets();

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
