import S from 'components/UI/Header/styled';
import { node } from 'prop-types';

function Header ({ children }) {
  return (
    <S.Header>
      {children}
    </S.Header>
  );
}

Header.propTypes = {
  children: node.isRequired
};

export default Header;
