import classnames from 'classnames';
import S from 'components/UserTyping/styled';
import { number } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

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

  const variant = useMemo(function () {
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
