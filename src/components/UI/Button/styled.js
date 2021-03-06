import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const StyledButton = styled.button`
  background-color: ${colors.primaryBlue};
  border: 1px solid transparent;
  border-color: ${colors.primaryBlue};
  border-radius: .25rem;
  color: ${colors.white};
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  padding: .375rem .75rem;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: .65;
    &:hover {
      cursor: not-allowed;
    }
  }

  &.btn-secondary {

  }

  @media ${devices.phone} {
    width: 100%;
  }
`;

export default {
  Button: StyledButton
};