import ChatMessage from 'components/ChatMessage';
import S from 'components/Chats/styled';
import NoChats from 'components/NoChats';
import UserTyping from 'components/UserTyping';
import { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import useDarkMode from 'state/hooks/useDarkMode';

function Chats () {
  const { darkModeClass } = useDarkMode();

  const chats  = useSelector(state => state.chats);

  const userTypingIndex = useMemo(function () {
    return chats.length === 0 ? 1 : chats.length;
  }, [chats]);

  const chatEndRef = useRef(null);

  useEffect(function () {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <S.ChatEnd ref={chatEndRef}/>
    </S.Chats>
  );
}

export default Chats;