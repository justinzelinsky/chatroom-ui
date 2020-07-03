import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const StyledContainer = styled(Container)`
  padding: 0;
`;

const ChatroomUserlistContainer = styled.div`
  display: flex;
`;

const StyledListGroup = styled(ListGroup)`
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

const ChatEnd = styled(ListGroup.Item)`
  visibility: hidden;
`;

export {
  ChatEnd,
  ChatroomUserlistContainer,
  StyledContainer,
  StyledListGroup
};