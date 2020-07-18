import styled from 'styled-components';
import colors from 'styles/colors';

const FormContainer = styled.div`
  border-bottom: 1px solid ${colors.lightGrayishBlue};
  border-right: 1px solid ${colors.lightGrayishBlue};
  border-left: 1px solid ${colors.lightGrayishBlue};
  padding: 10px;

  &.dark-mode {
    background-color: ${colors.darkGreyBlue};
  }
`;

export default {
  FormContainer
} ;
