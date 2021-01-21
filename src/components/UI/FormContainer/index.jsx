import S from 'components/UI/FormContainer/styled';
import { node } from 'prop-types';
import useDarkMode from 'state/hooks/useDarkMode';
function FormContainer ({ children }) {
  const { darkModeClass } = useDarkMode();

  return (
    <S.FormContainer className={darkModeClass}>
      {children}
    </S.FormContainer>
  );
}

FormContainer.propTypes = {
  children: node.isRequired
};

export default FormContainer;