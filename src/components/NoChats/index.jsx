import S from 'components/NoChats/styled';
import { useMemo } from 'react';
import useDarkMode from 'state/hooks/useDarkMode';

function NoChats () {
  const { darkMode } = useDarkMode();

  const variant = useMemo(function () {
    return darkMode ? 'primary' : 'light';
  }, [darkMode]);

  return (
    <S.NoChats variant={variant}>
      No messages!
    </S.NoChats>
  );
}

export default NoChats;
