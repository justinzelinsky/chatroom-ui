import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import devices from 'styles/devices';

const StyledButton = styled(Button)`
  margin: 0 auto;
  width: 200px;

  @media ${devices.phone} {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

export {
  StyledButton
};