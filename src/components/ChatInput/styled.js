import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const StyledForm = styled(Form)`
  align-items: center;
  background-color: ${colors.white};
  border-top: 1px solid ${colors.black};
  border-radius: 5px;
  bottom: 0;
  display: flex;
  left: 0;
  margin: 0;
  padding: 10px 0;
  position: fixed;
  right: 0;

  &.dark-mode {
    background-color: ${colors.veryDarkGreyBlack};
  }

  @media ${devices.phone} {
    padding: 10px;
    display: block;
  }
`;

const StyledButton = styled(Button)`
  margin: 5px;
  width: 130px;

  @media ${devices.phone} {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

const StyledFormGroup = styled(Form.Group)`
  align-items: center;
  display: flex;
  flex: 1;
  margin-bottom: 0;

  @media ${devices.phone} {
    margin-top: 10px;
  }
`;

const StyledFormLabel = styled(Form.Label)`
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;

  &::after {
    content: ':';
  }
`;

const StyledInput = styled(Form.Control)`
  flex: 1;
  margin: 5px;

  @media ${devices.phone} {
    margin: 0;
    display: inline-block;
  }

  &.dark-mode {
    background-color: ${colors.black};
    border: ${colors.verySoftViolet};
    color: ${colors.white};
  }
`;

export {
  StyledButton,
  StyledForm,
  StyledFormGroup,
  StyledFormLabel,
  StyledInput
};

