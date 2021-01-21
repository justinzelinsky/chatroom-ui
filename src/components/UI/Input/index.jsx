import S from 'components/UI/Input/styled';
import useDarkMode from 'state/hooks/useDarkMode';

function Input (props) {
  const { darkModeClass } = useDarkMode();

  return (
    <S.Input
      className={darkModeClass}
      {...props}
    />
  );
}

export default Input;