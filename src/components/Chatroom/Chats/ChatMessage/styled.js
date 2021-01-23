import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const ChatMessage = styled(ListGroup.Item)`
  align-items: center;
  display: flex;
  font-size: 16px;
  padding: 10px;
`;

const Message = styled.div`
  flex: 1;
  word-break: break-word;

  &.admin {
    font-style: italic;
  }
`;

const TimeStamp = styled.div`
  font-style: italic;
  margin-left: 5px;
`;

const UserChat = styled.div`
  display: flex;
  flex: 1;
`;

const UserName = styled.div`
  font-weight: bold;
  margin-right: 5px;

  &:after {
    content: ' :';
  }
`;

export default {
  ChatMessage,
  Message,
  TimeStamp,
  UserChat,
  UserName,
};