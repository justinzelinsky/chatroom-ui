import S from 'components/UI/FormLabel/styled';
import { node } from 'prop-types';

function FormLabel ({ children, ...formLabelProps }) {
  return (
    <S.FormLabel {...formLabelProps}>
      {children}
    </S.FormLabel>
  );
}

FormLabel.propTypes = {
  children: node.isRequired
};

export default FormLabel;

