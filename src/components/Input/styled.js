import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import colors from 'styles/colors';

const StyledInput = styled(Form.Control)`
  &.dark-mode {
      background-color: ${colors.black};
      border: ${colors.verySoftViolet};
      color: ${colors.white};
  }
`;

export {
  StyledInput
};
