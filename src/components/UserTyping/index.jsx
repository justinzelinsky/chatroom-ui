import classnames from 'classnames';
import { number } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { StyledListGroupItem } from './styled';

function UserTyping ({ index }) {
  const { darkMode, usersTyping } = useSelector(state => ({
    darkMode: state.darkMode,
    usersTyping: state.usersTyping
  }));
  const [dots, setDots] = useState('.');

  useEffect(function () {
    const dotProgress = dots.length < 3 ? `${dots}.` : '.';
    const timeoutId = setTimeout(() => setDots(dotProgress), 500);
    return function () {
      clearTimeout(timeoutId);
    };
  }, [dots]);

  const chatVariant = useMemo(function () {
    if (darkMode) {
      return index % 2 ? 'primary' : 'info';
    }
    return  index % 2 ? 'light' : 'dark';
  }, [darkMode, index]);

  const someoneIsTyping = useMemo(function () {
    if (usersTyping.length === 0) {
      return null;
    }
    if (usersTyping.length === 1) {
      return `${usersTyping[0].name} is typing ${dots}`;
    }
    return `Multiple people are typing ${dots}`;
  }, [dots, usersTyping]);

  const hiddenClass = useMemo(function () {
    return classnames({ hidden: !someoneIsTyping });
  }, [someoneIsTyping]);

  return (
    <StyledListGroupItem
      className={hiddenClass}
      variant={chatVariant}
    >
      {someoneIsTyping}
    </StyledListGroupItem>
  );
}

UserTyping.propTypes = {
  index: number.isRequired
};

export default UserTyping;
