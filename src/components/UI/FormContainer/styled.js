import styled from 'styled-components';
import colors from 'styles/colors';

const FormContainer = styled.div`
  border: 1px solid ${colors.lightGrayishBlue};
  margin: 50px auto;
  padding: 10px;
  width: 600px;

  &.dark-mode {
    background-color: ${colors.darkGreyBlue};
  }
`;

export default {
  FormContainer
} ;
