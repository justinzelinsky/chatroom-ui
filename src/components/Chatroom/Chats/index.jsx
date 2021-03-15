import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useDarkMode from 'state/hooks/useDarkMode';
import useScrollRef from 'state/hooks/useScrollRef';

import ChatMessage from './ChatMessage';
import NoChats from './NoChats';
import S from './styled';
import UserTyping from './UserTyping';

function Chats () {
  const { darkModeClass } = useDarkMode();
  const scrollRef = useScrollRef();

  const chats = useSelector(state => state.chats);

  const userTypingIndex = useMemo(function () {
    return chats.length === 0 ? 1 : chats.length;
  }, [chats]);

  return (
    <S.Chats className={darkModeClass}>
      {chats.length === 0 && <NoChats />}
      {chats.map((chat, idx) => (
        <ChatMessage
          chat={chat}
          index={idx}
          key={idx}
        />
      ))}
      <UserTyping index={userTypingIndex} />
      <S.ChatEnd ref={scrollRef}/>
    </S.Chats>
  );
}

export default Chats;