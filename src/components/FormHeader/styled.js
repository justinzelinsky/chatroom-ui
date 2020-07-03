import styled from 'styled-components';
import devices from 'styles/devices';

const StyledFormHeader = styled.h1`
  text-align: center;

  @media ${devices.phone} {
    text-align: left;
  }
`;

export {
  StyledFormHeader
} ;
