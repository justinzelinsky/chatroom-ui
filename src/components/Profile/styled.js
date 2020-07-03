import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
  }
`;

const StyledButton = styled(Button)`
  &.dark-mode {
    color: ${colors.white};
  }
`;

const StyledInput = styled(Form.Control)`
  &.dark-mode {
    background-color: ${colors.black};
    border: ${colors.verySoftViolet};
    color: ${colors.white};
  }
`;

const StyledHeader = styled.h1`
  border-bottom: 1px solid rgba(45, 45, 45, .5);
`;

export {
  StyledButton,
  StyledHeader,
  StyledInput,
  StyledJumbotron
};