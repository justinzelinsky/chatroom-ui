import FormGroup from 'components/UI/FormGroup';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const ChatInput = styled(Form)`
  align-items: center;
  background-color: ${colors.white};
  border-top: 1px solid ${colors.black};
  border-radius: 5px;
  bottom: 0;
  display: flex;
  left: 0;
  margin: 0;
  padding: 10px;
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

const InputWrapper = styled(FormGroup)`
  align-items: center;
  display: flex;
  flex: 1;
  margin-bottom: 0;

  @media ${devices.phone} {
    margin-top: 10px;
  }
`;

const UserName = styled(Form.Label)`
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;

  &::after {
    content: ':';
  }
`;

const MessageInput = styled(Form.Control)`
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

export default {
  ChatInput,
  InputWrapper,
  MessageInput,
  UserName,
};

