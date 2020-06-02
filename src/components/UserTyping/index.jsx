import './style.scss';

import { number } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function UserTyping ({ index }) {
  const { darkMode, usersTyping } = useSelector(state => ({
    darkMode: state.darkMode,
    usersTyping: state.usersTyping
  }));
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const dotProgress = dots.length < 3 ? `${dots}.` : '.';
    const timeoutId = setTimeout(() => setDots(dotProgress), 500);
    return () => clearTimeout(timeoutId);
  }, [dots]);

  const chatVariant = useMemo(() => {
    if (darkMode) {
      return index % 2 ? 'primary' : 'info';
    }
    return  index % 2 ? 'light' : 'dark';
  }, [darkMode, index]);

  const someoneIsTyping = useMemo(() => {
    if (usersTyping.length === 0) {
      return null;
    }
    if (usersTyping.length === 1) {
      return `${usersTyping[0].name} is typing ${dots}`;
    }
    return `Multiple people are typing ${dots}`;
  }, [dots, usersTyping]);

  if (someoneIsTyping === null) {
    return (
      <ListGroup.Item
        styleName="user-typing-chat hidden"
        variant={chatVariant}
      />
    );
  }

  return (
    <ListGroup.Item
      styleName="user-typing-chat"
      variant={chatVariant}
    >
      {someoneIsTyping}
    </ListGroup.Item>
  );
}

UserTyping.propTypes = {
  index: number.isRequired
};

export default UserTyping;
