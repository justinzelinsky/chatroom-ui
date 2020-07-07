import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import devices from 'styles/devices';

const FormLabel = styled(Form.Label)`
  text-align: right;

  @media ${devices.phone} {
    text-align: left;
  }
`;

export default {
  FormLabel
};