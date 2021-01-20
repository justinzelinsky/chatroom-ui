import classnames from 'classnames';
import S from 'components/ChatMessage/styled';
import { bool, number, object, shape, string } from 'prop-types';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import formatDate from 'utils/formatDate';

function ChatMessage ({ chat, index }) {
  const darkMode = useSelector(state => state.darkMode);

  const chatVariant = useMemo(function () {
    if (darkMode) {
      return index % 2 ? 'primary' : 'info';
    }
    return index % 2 ? 'light' : 'dark';
  }, [darkMode, index]);

  const { isAdminChat, message, ts, user } = chat;

  const chatClassName = useMemo(function () {
    return classnames({ admin: isAdminChat });
  }, [isAdminChat]);

  const timestamp = useMemo(function () {
    return formatDate(new Date(ts), true);
  }, [ts]);

  return (
    <S.ChatMessage variant={chatVariant}>
      <S.UserChat>
        <S.UserName>
          {user.name}
        </S.UserName>
        <S.Message className={chatClassName}>
          {message}
        </S.Message>
      </S.UserChat>
      <S.TimeStamp>
        {timestamp}
      </S.TimeStamp>
    </S.ChatMessage>
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

export default memo(ChatMessage);
