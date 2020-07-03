import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const StyledListGroupItem = styled(ListGroup.Item)`
  font-style: italic;
  padding: 10px;

  &.hidden {
    visibility: hidden;
  }
`;

export {
  StyledListGroupItem
};