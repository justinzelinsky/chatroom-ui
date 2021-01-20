import S from 'components/UI/FormHeader/styled';
import { node } from 'prop-types';

function FormHeader ({ children }) {
  return (
    <S.FormHeader>
      {children}
    </S.FormHeader>
  );
}

FormHeader.propTypes = {
  children: node.isRequired
};

export default FormHeader;