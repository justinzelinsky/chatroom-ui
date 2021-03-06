import { number } from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import useDarkMode from 'state/hooks/useDarkMode';

import S from './styled';

function UserTyping ({ index }) {
  const { darkMode } = useDarkMode();
  const usersTyping = useSelector(state => state.usersTyping);
  const [dots, setDots] = useState('.');

  useEffect(function () {
    const dotProgress = dots.length < 3 ? `${dots}.` : '.';
    const timeoutId = setTimeout(() => setDots(dotProgress), 500);

    return function () {
      clearTimeout(timeoutId);
    };
  }, [dots]);

  const variant = useMemo(function () {
    if (darkMode) {
      return index % 2 ? 'primary' : 'info';
    }
    return index % 2 ? 'light' : 'dark';
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
    return someoneIsTyping ? '' : 'hidden';
  }, [someoneIsTyping]);

  return (
    <S.UserTyping
      className={hiddenClass}
      variant={variant}
    >
      {someoneIsTyping}
    </S.UserTyping>
  );
}

UserTyping.propTypes = {
  index: number.isRequired
};

export default UserTyping;
