import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const StyledListGroupItem = styled(ListGroup.Item)`
  align-items: center;
  display: flex;
  font-size: 16px;
  padding: 10px;
`;

const UserNameChat = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: bold;

  &:after {
    content: ':';
  }
`;

const Message = styled.div`
  word-break: break-word;

  &.admin {
    font-style: italic;
  }
`;

const TimeStamp = styled.div`
  font-style: italic;
  margin-left: 5px;
`;

export {
  Message,
  StyledListGroupItem,
  TimeStamp,
  UserName,
  UserNameChat
};