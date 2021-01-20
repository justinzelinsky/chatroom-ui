import S from 'components/UI/Form/styled';
import { node } from 'prop-types';

function Form ({ children, ...formProps }) {
  return (
    <S.Form {...formProps}>
      {children}
    </S.Form>
  );
}

Form.propTypes = {
  children: node.isRequired
};

export default Form;