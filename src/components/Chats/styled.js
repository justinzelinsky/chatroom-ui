import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const ChatEnd = styled(ListGroup.Item)`
  visibility: hidden;
`;

const Chats = styled(ListGroup)`
  background-color: ${colors.verySoftCyan};
  flex: 1;
  height: calc(100vh - 125px);
  overflow-y: scroll;
  padding: 0;
  padding: 10px 10px 0 10px;

  &.dark-mode {
    background-color: ${colors.veryDarkDesaturatedBlue};
  }

  @media ${devices.phone} {
    height: calc(100vh - 156px);
  }
`;

export default {
  ChatEnd,
  Chats,
};