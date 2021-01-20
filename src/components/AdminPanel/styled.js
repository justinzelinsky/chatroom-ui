import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const StyledJumbotron = styled(Jumbotron)`
  margin: 20px auto;
  width: 50%;

  @media ${devices.phone} {
    margin: 20px 0;
    width: 100%;
  }

  &.dark-mode {
    background-color: ${colors.darkGreyBlue};
    color: ${colors.white};

    button {
      color: ${colors.white};
    }
  }
`;

const Header = styled.h1`
  border-bottom: 1px solid ${colors.black};
  margin-bottom: 20px;
`;

export default {
  Header,
  Jumbotron: StyledJumbotron
};