import S from 'components/NoChats/styled';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function NoChats () {
  const darkMode = useSelector(state => state.darkMode);
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
