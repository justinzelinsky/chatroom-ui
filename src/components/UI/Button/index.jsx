import S from 'components/UI/Button/styled';
import { node } from 'prop-types';

function Button ({ children, ...buttonProps }) {
  return (
    <S.Button {...buttonProps}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: node.isRequired
};

export default Button;
