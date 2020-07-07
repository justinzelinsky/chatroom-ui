import classnames from 'classnames';
import S from 'components/Input/styled';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

function Input (props) {
  const darkMode = useSelector(state => state.darkMode);
  const darkModeClassname = useMemo(function () {
    return classnames({
      'dark-mode': darkMode
    });
  }, [darkMode]);

  return (
    <S.Input
      className={darkModeClassname}
      {...props}
    />
  );
}

export default Input;