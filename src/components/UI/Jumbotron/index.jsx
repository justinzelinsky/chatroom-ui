import S from 'components/UI/Jumbotron/styled';
import { node } from 'prop-types';

function Jumbotron ({ children, ...props }) {
  return (
    <S.Jumbotron {...props}>
      {children}
    </S.Jumbotron>
  );
}

Jumbotron.propTypes = {
  children: node.isRequired
};

export default Jumbotron;