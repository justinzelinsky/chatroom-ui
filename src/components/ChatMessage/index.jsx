import classnames from 'classnames';
import { bool, number, object, shape, string } from 'prop-types';
import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import formatDate from 'utils/formatDate';

import {
  Message,
  StyledListGroupItem,
  TimeStamp,
  UserName,
  UserNameChat
} from './styled';

function ChatMessage ({ chat, index }) {
  const darkMode = useSelector(state => state.darkMode);

  const chatVariant = useMemo(function () {
    if (darkMode) {
      return index % 2 ? 'primary' : 'info';
    }
    return index % 2 ? 'light' : 'dark';
  }, [darkMode, index]);

  const { isAdminChat, message, ts, user } = chat;

  const chatStyleName = useMemo(
    () => classnames({
      admin: isAdminChat
    }),
    [isAdminChat]
  );

  const timestamp = useMemo(
    () => formatDate(new Date(ts), true),
    [ts]
  );

  return (
    <StyledListGroupItem variant={chatVariant}>
      <UserNameChat>
        <UserName>
          {user.name}
        </UserName>
        <Message className={chatStyleName}>
          {message}
        </Message>
      </UserNameChat>
      <TimeStamp>
        {timestamp}
      </TimeStamp>
    </StyledListGroupItem>
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
