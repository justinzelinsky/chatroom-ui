import styled from 'styled-components';
import devices from 'styles/devices';

const FormHeader = styled.h1`
  text-align: center;

  @media ${devices.phone} {
    text-align: left;
  }
`;

export default {
  FormHeader
} ;
