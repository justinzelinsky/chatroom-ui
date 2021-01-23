import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const UserTyping = styled(ListGroup.Item)`
  font-style: italic;
  padding: 10px;

  &.hidden {
    visibility: hidden;
  }
`;

export default {
  UserTyping
};